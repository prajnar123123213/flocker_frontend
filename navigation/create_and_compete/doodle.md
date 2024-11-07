---
layout: post 
title: Create and Compete - Doodle
search_exclude: true
permalink: /create_and_compete/doodle
menu: nav/doodle.html
author: Alex, Arshia, Prajna, and Mirabelle 
---

<details>
  <summary>Room Details</summary>

<a href="{{site.baseurl}}/moderation/rules_doodle/">Moderation Rules</a>

<p> The page is a place where people can explore themselves creatively and compete to see who has the best doodle. This allows for players to collaborate over their artistic abilities. Our room includes a chat room where players can converse about their creations, a doodle compete area, a place where people can post their art, and winners get crowned every week. This will help add to our classes page by making a fun artistic environment where everyone can collaborate. </p>

<a href="{{site.baseurl}}/moderation/chat_doodle/" class="button">Chat Room</a>
<a href="{{site.baseurl}}/moderation/artpost_doodle/" class="button">Art Post</a>
</details>

<canvas id="drawingCanvas" width="600" height="400" style="border: 6px solid #7573e6; cursor: crosshair; margin-top: 10px;"></canvas>

<style>
    .button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #7573e6;
        color: white;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
    }
</style>

<script>
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let currentColor = '#ad3636'; 
    let previousColor = currentColor; 
    let drawingHistory = []; 

    function initializeCanvasBackground() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        saveCanvasState(); 
    }

    initializeCanvasBackground();

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
        saveCanvasState(); 
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
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        saveCanvasState(); 
    }

    function changeColor(color) {
        currentColor = color;
        previousColor = color;
    }

    function activateEraser() {
        currentColor = '#ffffff'; 
    }

    function downloadDrawing() {
        const link = document.createElement('a');
        link.download = 'my_drawing.png';
        link.href = canvas.toDataURL();
        link.click();
    }

    function saveCanvasState() {
        drawingHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    }

    function undoLastAction() {
        if (drawingHistory.length > 1) {
            drawingHistory.pop(); 
            const previousState = drawingHistory[drawingHistory.length - 1];
            ctx.putImageData(previousState, 0, 0); 
        } else {
            clearCanvas(); 
        }
    }
</script>
<div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
    <button style="background-color: #524e4e !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="changeColor('#524e4e')">Black</button>
    <button style="background-color: #3a63e8 !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="changeColor('#3a63e8')">Blue</button>
    <button style="background-color: #3c7d2c !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="changeColor('#3c7d2c')">Green</button>
    <button style="background-color: #992222 !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="changeColor('#992222')">Red</button>
    <button style="background-color: #db74db !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="changeColor('#db74db')">Pink</button>
    <button style="background-color: #7573e6 !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="activateEraser()">Eraser</button>
    <button style="background-color: #7573e6 !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="undoLastAction()">Undo</button>
    <button style="background-color: #7573e6 !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="clearCanvas()">Clear Drawing</button>
    <button style="background-color: #ad3636 !important; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="downloadDrawing()">Save Your Work!</button>
</div>