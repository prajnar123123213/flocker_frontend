---
layout: post
title: Flavor Fusion
search_exclude: true
permalink: rate_and_relate/flavor_fusion/
menu: nav/rate_and_relate.html
author: Nolan, Jacob, Claire
---

<style>
  :root {
    --first: #09090b;
    --second: #18181b;
    --third: #27272a;
    --text: #fafafa;
  }

  body {
    background-color: var(--first);
    color: var(--text);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .flavorflux {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 70px;
    padding: 15px;
    gap: 30px; /* Increased gap for better spacing */
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
  }

  .combo {
    border: 2px solid var(--third);
    border-radius: 20px;
    padding: 20px;
    width: 300px;
    height: fit-content;
    background-color: var(--second); /* Added background color for contrast */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Added shadow for depth */
  }

  h1,
  h2,
  h3 {
    margin: 0; /* Removes default margins for better alignment */
    padding-bottom: 10px; /* Added space below headings */
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  p,
  ul {
    font-size: 14px; /* Uniform font size for better readability */
  }

  ul {
    padding-left: 20px; /* Added padding to lists */
  }

  button {
    background-color: #3b82f6; /* Button color */
    color: var(--text); /* Text color on button */
    border: none;
    border-radius: 4px; /* Rounded button edges */
    padding: 10px 15px; /* Button padding */
    cursor: pointer;
    transition: background-color 0.3s; /* Smooth transition */
  }

  button:hover {
    background-color: #2563eb; /* Darker shade on hover */
  }

  .left,
  .right {
    width: 100%; /* Make them stack on small screens */
  }

  .slot-machine {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .slots {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    border: 4px solid #333;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
  }

  .slot {
    width: 100px;
    height: 100%;
    font-size: 50px;
    text-align: center;
    line-height: 100px;
  }

  .spin-button {
    padding: 10px 20px;
    font-size: 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .spin-button:active {
    background-color: #45a049;
  }

  #dock {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    border-radius: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  /* Style for each dock icon */
  .dock-icon {
    transition: transform 0.2s;
  }

  .dock-icon img {
    width: 50px;
    height: auto;
    cursor: pointer;
  }

  /* Scale effect on hover */
  .dock-icon:hover {
    transform: scale(1.2);
  }
</style>

<div id="flavorflux"></div>
<div id="dock">
  <div class="dock-icon" onclick="mainPage()">
    <img
      src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695726.jpg"
      alt="Home Icon"
    />
  </div>
  <div class="dock-icon" onclick="slotmachine()">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDOfJMYbL8Ekir9MIcZTjcgBRklFFWKWVctb03176jZ1WZk8:https://images.vexels.com/media/users/3/332336/isolated/preview/b78d5146c45000b5e33daeafc9dbad97-slot-machine-with-three-sevens-illustration.png&s"
      alt="Slot Machine Icon"
    />
  </div>
  <div class="dock-icon" onclick="profile()">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0X2Lo_idlvIQzBezXKOXFWFdDJn1WZt9EzwXVr1kzlAswvyE:https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png&s"
      alt="Profile Icon"
    />
  </div>
</div>

<script>
  let pythonURI;
  if (location.hostname === "localhost") {
    pythonURI = "http://localhost:8887";
  } else if (location.hostname === "127.0.0.1") {
    pythonURI = "http://127.0.0.1:8887";
  } else {
    pythonURI = "https://flocker.nighthawkcodingsociety.com";
  }

  const fetchOptions = {
    method: "GET",
    mode: "cors",
    cache: "default",
    credentials: "include",
    headers: { "Content-Type": "application/json", "X-Origin": "client" },
  };

  // getting our channel id dynamically
  window.channel_id = 2;

  async function getChannelID() {
    console.log("getting id");

    const __response = await fetch(`${pythonURI}/api/channels/filter`, {
      ...fetchOptions,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ group_name: "Flavor Fusion" }),
    });

    let channels = await __response.json();
    console.log(channels);

    channels.forEach((channel) => {
      if (channel.name === "Combos") window.channel_id = channel.id;
    });
  }

  getChannelID();

  async function createPost(postStuff) {
    console.log("bob!");
    let url = `${pythonURI}/api/post`;
    let __data = await fetch(url, {
      ...fetchOptions,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel_id: window.channel_id,
        title: postStuff.title,
        comment: postStuff.description,
        content: {
          ratings: [],
          comments: [],
          ingredients: postStuff.ingr,
        },
      }),
    });

    console.log(__data);
  }

  let posts = [];
  async function getPosts() {
    const rawData = await fetch(`${pythonURI}/api/posts`, {
      ...fetchOptions,
    });

    let dat = await rawData.json();
    console.log("dat", dat);

    dat.forEach(da => {
      if(da.channel_name === "Combos") posts.push(da);
    })
  }

  console.log("getting posts (fix) 2x");
  getPosts();

  function addComment(id) {
    let element = document.querySelector(`form[data-postid="${id}"]`);
    let comment = element.getElementsByClassName("commenttext")[0];
    let newComment = {
      comboId: id,
      comment: comment.value,
      html,
    };
    console.log(newComment);
  }

  const msgStyles = [
    "font-size: 12px",
    "color: #fafafa",
    "font-family: monospace",
    "background: #18181b",
    "display: inline-block",
    "padding: 1rem 3rem",
    "border: 1px solid #fafafa",
    "border-radius: 4px;",
  ].join(";");

  console.log("%c Flavor Fusion. Best fusion.", msgStyles);

  window.comboBeingCreated = "t";

  const emojis = ["🍕", "🍔", "🍟", "🌭", "🍎", "🍇", "🍉", "🍣", "🥗", "🍩"];

  // Store interval IDs to control the emoji changes
  let intervals = [];

  function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }

  function spinSlots() {
    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");

    // Start fast-changing emojis for each slot
    intervals = [
      startSpinning(slot1, 100), // Slot 1 changes every 100ms
      startSpinning(slot2, 100), // Slot 2 changes every 100ms
      startSpinning(slot3, 100), // Slot 3 changes every 100ms
    ];

    // Stop each slot after different intervals
    setTimeout(() => stopSlot(0, slot1), 1000); // Stop slot 1 after 1 second
    setTimeout(() => stopSlot(1, slot2), 1500); // Stop slot 2 after 1.5 seconds
    setTimeout(() => stopSlot(2, slot3), 2000); // Stop slot 3 after 2 seconds
  }

  function startSpinning(slot, speed) {
    return setInterval(() => {
      slot.textContent = getRandomEmoji(); // Change to a random emoji
    }, speed);
  }

  function stopSlot(intervalIndex, slot) {
    clearInterval(intervals[intervalIndex]); // Stop the interval
    slot.textContent = getRandomEmoji(); // Set the final emoji
  }

  let mainCode = `
          <div class="left">
              <h2>Combos4U</h2>
              <div class="combo">
                  <h3>Timmy's Combo</h3>
                  <p>A super cool food combo</p>
                  <p>🍌 - 🍫 - 🌶️</p>
                  <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
                  <p>Comments:</p>
                  <ul>
                      <li>This is dumb</li>
                      <li>I hate Timmy &gt;:(</li>
                  </ul>
                  <form method="get" data-postid="123">
                      <label for="commenttext">Add a comment</label>
                      <input type="text" class="commenttext" placeholder="Comment">
                      <button type="submit" onclick="addComment('123');">Submit</button>
                  </form>
              </div>
              <div class="combo">
                  <h3>Juan's Combo</h3>
                  <p>A super sigma food combo ahaha</p>
                  <p>🍌 - 🍫 - 🌶️</p>
                  <p><strong>Rating:</strong> ⭐⭐⭐</p>
                  <p>Comments:</p>
                  <ul>
                      <li>Juan is so hot!!!</li>
                      <li>Congrats on getting a gf, Kanhay!</li>
                  </ul>
                  <form method="get" data-postid="456">
                      <label for="commenttext">Add a comment</label>
                      <input type="text" class="commenttext" placeholder="Comment">
                      <button type="submit" onclick="addComment('456');">Submit</button>
                  </form>
              </div>
          </div>`;

  let leaderboardCode = `<table>
  <thead>
  <tr>
  <th>Rank</th>
  <th>Chef</th>
  <th>Combos</th>
  <th>Spins</th>
  <th>Average Rating</th>
  </tr>
  </thead>
  <tbody><tr>
  <td>1</td>
  <td>Claire</td>
  <td>18893</td>
  <td>38909</td>
  <td>4.99</td>
  </tr>
  <tr>
  <td>2</td>
  <td>Mickey</td>
  <td>18687</td>
  <td>37012</td>
  <td>4.95</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Minnie</td>
  <td>17234</td>
  <td>36890</td>
  <td>4.87</td>
  </tr>
  <tr>
  <td>4</td>
  <td>Donald</td>
  <td>15873</td>
  <td>29734</td>
  <td>4.55</td>
  </tr>
  <tr>
  <td>5</td>
  <td>Goofy</td>
  <td>13731</td>
  <td>28394</td>
  <td>4.32</td>
  </tr>
  </tbody></table>`;

  let slotCode = `<div class="slot-machine">
        <div class="slots">
          <div class="slot" id="slot1">🍕</div>
          <div class="slot" id="slot2">🍔</div>
          <div class="slot" id="slot3">🍟</div>
        </div>
        <button class="spin-button" onclick="spinSlots()">SPIN</button>
        <br />
        <button onclick="submissionPage()">Submit</button>
      </div>`;

  let submissionCode = `<div class="form-container">
      <h2>Add Description and Title to a Submission</h2>
      <h3 id="beingCreated">Combo being created: </h3>
      <div id="submissionForm">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" required>
          <br />

          <label for="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
          <br />

          <button type="submit" onclick="submitCombo()">Submit</button>
      </div>
  </div>`;

  function submissionPage() {
    const _slot1 = document.getElementById("slot1");
    const _slot2 = document.getElementById("slot2");
    const _slot3 = document.getElementById("slot3");
    let _creariv = _slot1.innerText + _slot2.innerText + _slot3.innerText;
    console.log(_creariv);
    document.getElementById("flavorflux").innerHTML = submissionCode;
    document.getElementById("beingCreated").innerText += _creariv;
  }
  function submitCombo() {
    let subStuff = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      ingr: document.getElementById("beingCreated").innerText.split(":")[1],
    };

    createPost(subStuff);
  }

  let profileCode = `    <div class="left">
          <h1>Profile</h1>
          <p><strong>Username:</strong> timmy</p>
          <p><strong>Total Combos:</strong> 412</p>
          <h2>Current Combos:</h2>
          <div class="combo">
              <h3>Timmy's Combo</h3>
              <p>A super cool food combo</p>
              <p>🍌 - 🍫 - 🌶️</p>
              <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
              <p>Comments:</p>
              <ul>
                  <li>This is dumb</li>
                  <li>I hate Timmy &gt;:(</li>
              </ul>
          </div>
      </div>`;
  function profile() {
    document.getElementById("flavorflux").innerHTML = profileCode;
  }

  function mainPage() {
    document.getElementById("flavorflux").innerHTML = mainCode;
  }

  mainPage();

  function leaderboard() {
    document.getElementById("flavorflux").innerHTML = leaderboardCode;
  }

  function slotmachine() {
    document.getElementById("flavorflux").innerHTML = slotCode;
  }
</script>
