---
layout: post
title: Nighthawk Cars
description: A site all about cars
permalink: /voteforthegoat/nighthawkCars/
comments: true
---

<table>
    <tr>
        <td id="homepage"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars">Nighthawk Cars (Home Page)</a></td>
        <td id="internetdebates"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/luxuryCars">Luxury Cars</a></td>
        <td id="calicovote"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/vintageCars">Vintage Cars</a></td>
        <td id="dnerostore"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/studentCars">Student Cars</a></td>
        <td id="Beveragedebates"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/economyCars">Economy Cars</a></td>
    </tr>
</table>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Cars</title>
    <style>
            .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .popup-overlay.active {
            visibility: visible;
            opacity: 1;
        }
        .popup-content {
            background-color: black;
            padding: 20px;
            width: 80%;
            max-width: 400px;
            border-radius: 8px;
            text-align: center;
        }
        .popup-content h3 {
            margin-top: 0;
            color: #ff5050;
        }
        .popup-content button {
            background-color: #ff5050;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        body {
            background-color: white;
            color: rgb(255, 80, 80);
            font-family: Helvetica, sans-serif;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 2px solid rgb(255, 80, 80);
            font-weight: bold; /* Bold text */
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px; /* Rounded effect */
            padding: 10px; /* Space around the text */
        }
        p {
            color: white;   
        }
        button {
            background-color: rgb(255, 80, 80);
            color: white;
            border: none;
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
            border-radius: 15px; /* Rounded corners */
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: rgb(220, 60, 60); /* Slightly darker on hover */
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            border: 1px solid rgb(200, 200, 200); /* Light gray border */
            border-radius: 10px; /* Rounded corners */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 10px; /* Space above message box */
        }
    </style>
</head>
<body>

<h2> Welcome to the Nighthawk Cars Page! </h2>
<p>   </p>
A set of pages created by Lars Andre Lindain, Arnav Mittal, Weston Gardener, and Shaurya Singh
<p>   </p>
Here is a game to keep you entertained:

<iframe src="https://voyager162.github.io/carGame/index.html"
        width="1200" 
        height="1200" 
        frameborder="0" 
        allowfullscreen>
</iframe>

<div class="popup-overlay" id="popup">
    <div class="popup-content">
        <h3>Welcome to Nighthawk Cars!</h3>
        <p>Please read and accept the following rules:</p>
        <ul style="text-align: left; padding-left: 20px;">
            <li>Respect other users' opinions on cars.</li>
            <li>No spamming or irrelevant links.</li>
            <li>Use appropriate language at all times.</li>
        </ul>
        <button onclick="closePopup()">I Agree</button>
    </div>
</div>

<script>
    // Show popup on page load
    window.onload = function() {
        document.getElementById('popup').classList.add('active');
    };

    // Close popup function
    function closePopup() {
        document.getElementById('popup').classList.remove('active');
    }
</script>