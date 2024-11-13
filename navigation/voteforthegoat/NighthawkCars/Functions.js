import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';

window.addComment = async function addComment(channelID) {
    const user_name = localStorage.getItem('username') || 'Guest';
    const comment = document.getElementById("comment").value.trim();
    if (!comment) {
        alert("Please enter a message.");
        return;
    }
    const commentData = {
        title: "Economy Cars",
        comment: comment,
        channel_id: channelID,
        user_name: localStorage.getItem('username') || 'Guest'
    };
    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentData)
        });

        if (!response.ok) throw new Error('Failed to submit argument: ' + response.statusText);
        
        document.getElementById("comment").value = "";
        fetchComments(channelID)
    } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Error submitting comment: ' + error.message);
    }
};






async function fetchComments(selectedChannelId) {
    try {
        // Fetch comments from the backend for the specified channel ID
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel_id: selectedChannelId })
        });

        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Failed to fetch comments: ' + response.statusText);
        }

        // Parse the JSON response
        const commentsData = await response.json();

        // Clear the message box before loading new comments
        const messageBox = document.getElementById("messageBox");
        messageBox.innerHTML = ""; // Clear existing comments

        // Loop through each comment and add it to the message box
        for (const comment of commentsData) {
            const commentElement = document.createElement("p");
            commentElement.textContent = `${comment.user_name} - ${comment.comment}`;
            messageBox.appendChild(commentElement);
        }
    } catch (error) {
        console.error('Error fetching comments:', error);
        alert('Error fetching comments: ' + error.message);
    }
}