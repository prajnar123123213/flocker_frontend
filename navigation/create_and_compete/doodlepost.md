---
layout: post 
title: Create and Compete - Doodle
search_exclude: true
permalink: /moderation/doodlepost
author: Arshia, Prajna, Mirabelle, Alex
---

<style>
.doodle-post-btn {
  position: relative;
  font-size: 1.2em;
  padding: 0.7em 1.4em;
  background-color: #000000;
  text-decoration: none;
  border: none;
  border-radius: 0.5em;
  color: #000000;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
}

.doodle-post-btn::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
  border-radius: 0 0 0.5em 0;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.doodle-post-btn:hover::before {
  width: 1.6em;
  height: 1.6em;
}

.doodle-post-btn:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}
</style>



<div class="main">
    <div class="content">
        <div class="form-container">
            <form id="channelForm">
                <div class="form-inputs">
                    <input type="text" id="title" name="title" placeholder="Enter Title Here" required>
                </div>
                <textarea id="textArea" name="textArea" placeholder="Post Here" required></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
        <div id="doodlepost"></div>
    <div>
</div>

<style>
    .main {
        display: flex;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        /* padding-left: 180px; */
    }

    /* Form Styling */
    .form-container {
        padding: 20px;
        background-color: #000000;
        border-radius: 12px;
        width: calc(100% - 400px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
    }

    .form-inputs {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    #title {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 16px;
    }

    #textArea {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 16px;
        margin-top: 10px;
        resize: none;
        height: 100px;
    }

    button[type="submit"] {
        align-self: flex-start;
        padding: 10px 20px;
        background-color: #1da1f2;
        color: black;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        transition: background-color 0.2s ease;
    }

    button[type="submit"]:hover {
        background-color: #000000;
    }

    /* Channels Container */
    #doodlepost {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-top: 20px;
    }

    /* Post Cards Styling */
    .card {
        width: calc(50% - 20px);
        min-width: 300px;
        padding: 20px;
        background-color: #000000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: left;
    }

    .card-title {
        font-size: 1.2em;
        font-weight: bold;
        color: #333;
    }

    .card-description {
        color: #555;
        font-size: 1em;
        margin-top: 10px;
    }
</style>

<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    const container = document.getElementById("doodlepost");

    async function fetchUser() {
        const response = await fetch(`${pythonURI}/api/user`, fetchOptions);
        const user = await response.json();
        console.log(user);
        return user;
    }

    const user = fetchUser();

    async function fetchChannels() {
        try {
            const groupName = 'Doodle';
            const responseData = {
                group_name: groupName,
            };
            // add filter to get only messages from this channel
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseData)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            container.innerHTML = "";

            channels.forEach(channel => {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("h3");
                title.classList.add("card-title");
                title.textContent = channel.name;

                const description = document.createElement("p");
                description.classList.add("card-description");
                description.textContent = channel.attributes["content"];

                card.appendChild(title);
                card.appendChild(description);

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }

    document.getElementById('channelForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('textArea').value;
        const group_id = 10;

        const channelData = {
            name: title,
            group_id: group_id,
            attributes: {"content": content}
        };

        try {
            const response = await fetch(`${pythonURI}/api/channel`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(channelData)
            });

            if (!response.ok) {
                throw new Error('Failed to add channel: ' + response.statusText);
            }

            fetchChannels();
            document.getElementById('channelForm').reset();
        } catch (error) {
            console.error('Error adding channel:', error);
            alert('Error adding channel: ' + error.message);
        }
    });
    fetchChannels();
</script>
