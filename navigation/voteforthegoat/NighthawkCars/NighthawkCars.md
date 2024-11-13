---
layout: post
title: Nighthawk Cars
description: A site all about cars
permalink: /voteforthegoat/nighthawkCars/
comments: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar</title>
</head>
<body>
    <table style="width: 100%; text-align: center; border-collapse: separate; border-spacing: 10px;">
        <tr>
            <td id="homepage" style="background-color: #ff4d4d; border-radius: 20px; padding: 15px 20px;">
                <a href="{{site.baseurl}}/voteforthegoat/nighthawkCars" style="color: #ffffff; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif; display: block; border-radius: 20px;">Nighthawk Cars (Home Page)</a>
            </td>
            <td id="internetdebates" style="background-color: #ff4d4d; border-radius: 20px; padding: 15px 20px;">
                <a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/studentCars" style="color: #ffffff; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif; display: block; border-radius: 20px;">Student Cars</a>
            </td>
            <td id="calicovote" style="background-color: #ff4d4d; border-radius: 20px; padding: 15px 20px;">
                <a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/vintageCars" style="color: #ffffff; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif; display: block; border-radius: 20px;">Vintage Cars</a>
            </td>
            <td id="dnerostore" style="background-color: #ff4d4d; border-radius: 20px; padding: 15px 20px;">
                <a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/luxuryCars" style="color: #ffffff; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif; display: block; border-radius: 20px;">Luxury Cars</a>
            </td>
            <td id="Beveragedebates" style="background-color: #ff4d4d; border-radius: 20px; padding: 15px 20px;">
                <a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/economyCars" style="color: #ffffff; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif; display: block; border-radius: 20px;">Economy Cars</a>
            </td>
        </tr>
    </table>
</body>
</html>

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
            background: linear-gradient(180deg, #333333, #ff4d4d, #ffffff); /* 180deg for top-to-bottom gradient */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 4px solid #000000;
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
            background-color: #000000;
            color: white;
            border: none;
            font-size: 14px;
            padding: 5px 10px;
            border: 3px solid #C0C0C0;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #ffffff; /* Slightly darker on hover */
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
            vertical-align: middle; /* Centers content vertically */
        }
        /* Images will adjust in size up to a maximum width and height */
        img {
            max-width: 1000px; /* Adjust maximum width as desired */
            max-height: 1000px; /* Adjust maximum height as desired */
            object-fit: contain; /* Keeps images within the max dimensions without cropping */
        }
        .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }
        .image-gallery img {
            max-height: 150px;
            object-fit: cover;
        }
        .iframe-container {
            align-items: center;
            padding-top: 20px; /* Add padding if you want to adjust vertical centering */
            transform: translateX(-50px);
        }
    </style>
</head>
<body>

<h2> Welcome to the Nighthawk Cars Page! </h2>
<p>   </p>
A set of pages created by Lars Andre Lindain, Arnav Mittal, Weston Gardener, and Shaurya Singh
<p>   </p>
Here is a game to keep you entertained:

<div class="iframe-container">
    <iframe src="https://voyager162.github.io/carGame/index.html"
            width="1000" 
            height="800" 
            frameborder="0" 
            allowfullscreen>
    </iframe>
</div>

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