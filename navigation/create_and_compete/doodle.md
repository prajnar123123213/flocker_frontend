---
layout: post 
title: Create and Compete - Doodle
search_exclude: true
permalink: /create_and_compete/doodle
menu: nav/create_and_compete.html
author: Alex, Arshia, Prajna, and Mirabelle 
---



<details>
  <summary>Room Details</summary>

<a href="{{site.baseurl}}/moderation/rules_doodle/">Moderation Rules</a>

<p> 
The page is a place where people can explore themselves creatively and compete to see who has the best doodle. This allows for players to collaborate over their artistic abilities. Our room includes a chat room where players can converse about their creations, a doodle compete area, a place where people can post their art, and winners get crowned every week. This will help add to our classes page by making a fun artistic environment where everyone can collaborate. </p>

</details>

<a href="{{site.baseurl}}/moderation/chat_doodle/" style="padding: 10px 20px; font-size: 16px; background-color: #7573e6; color: white; border: none; border-radius: 5px; text-decoration: none; display: inline-block;">
  Chat Room
</a>

<a href="{{site.baseurl}}/moderation/doodle_competition/" style="padding: 10px 20px; font-size: 16px; background-color: #7573e6; color: white; border: none; border-radius: 5px; text-decoration: none; display: inline-block;">
  Competition Room
</a>

<a href="{{site.baseurl}}/moderation/artpost_doodle/" style="padding: 10px 20px; font-size: 16px; background-color: #7573e6; color: white; border: none; border-radius: 5px; text-decoration: none; display: inline-block;">
  Artpost
</a>


</details>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drawing Canvas</title>
    <style>
        body { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        canvas { border: 2px solid #7573e6; cursor: crosshair; margin-top: 10px; }
        .color-button {
            width: 30px;
            height: 30px;
            border: none;
            margin: 2px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<canvas id="drawingCanvas" width="600" height="400"></canvas>

<script>
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let currentColor = '#ad3636';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    function startDrawing(event) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }

    function stopDrawing() {
        drawing = false;
        ctx.closePath();
    }

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeColor(color) {
        currentColor = color;
    }
        function downloadDrawing() {
        const link = document.createElement('a');
        link.download = 'my_drawing.png'; 
        link.href = canvas.toDataURL();  
        link.click();
    }
    
</script>

<div>
    <button onclick="clearCanvas()" style="font-size: 18px; background-color: #ad3636; padding: 10px 20px; color: white;">Clear Drawing</button>
</div>

<div style="margin-top: 10px;">
        <button style="background-color: #524e4e!important;  display:inline-block" onclick="changeColor('#524e4e')">Black</button>
        <button style="background-color: #3a63e8!important;  display:inline-block" onclick="changeColor('#3a63e8')">Blue</button>
        <button style="background-color: #3c7d2c!important;  display:inline-block" onclick="changeColor('#3c7d2c')">Green</button>
        <button style="background-color: #992222!important;  display:inline-block" onclick="changeColor('#992222')">Red</button>
        <button style="background-color: #db74db!important;  display:inline-block" onclick="changeColor('#db74db')">Pink</button>
</div>

</body>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doodle Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
