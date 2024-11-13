---
layout: page
title: Economy Cars
description: Economy Car Information and Chatroom
permalink: /voteforthegoat/nighthawkCars/economyCars/
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
        body {
            background: linear-gradient(135deg, #333333, #ff4d4d, #ffffff); /* 180deg for top-to-bottom gradient */
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
        .message-box1 {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        .message-box1p{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        .box11{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            max-height: 200px; /* Maximum height */
            overflow-y: auto; /* Scrollable */
            margin-top: 10px; /* Space above message box */
        }
        #comment {
            width: 100%;      /* Full width of the container */
            height: 200px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #commentInput {
            width: 100%;      /* Full width of the container */
            height: 90px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #nameInput {
            width: 100%;      /* Full width of the container */
            height: 59px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #optionSelect {
            width: 50%;      /* Full width of the container */
            height: 58px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
    </style>
</head>

<body>

<h3>Examples</h3>
<div>
    <p>Honda Civic</p>
    <img src="https://media.ed.edmunds-media.com/honda/civic/2023/oem/2023_honda_civic_sedan_si_fq_oem_1_1280.jpg" alt="civic" style="width:300px;height:200px;">
    <p>Toyota Corolla</p>
    <img src="https://hips.hearstapps.com/hmg-prod/images/2025-toyota-corolla-fx-102-6674930515eb4.jpg?crop=0.482xw:0.483xh;0.205xw,0.250xh&resize=768:*" alt="toyota corolla" style="width:300px;height:200px;">
    <p>Kia Forte</p>
    <img src="https://file.kelleybluebookimages.com/kbb/base/house/2012/2012-Kia-Forte-FrontSide_KIFT111_640x480.jpg?downsize=382:*"  alt="kia" style="width:300px;height:200px;">
    <p>Chevorlet Trax</p>
    <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/trax/masthead/02-images/2024-trax-mov-masthead.png?imwidth=960" alt="Trax" style="width:450px;height:200px;">
</div>

<h3>Pricing</h3>
<table>
    <tr>
        <td><p></p></td>
        <td><p>Average Price</p></td>
        <td><p>Lowest Price</p></td>
        <td><p>Highest Price</p></td>
    </tr>
    <tr>
        <td><p>Honda Civic</p></td>
        <td><p>$27,795</p></td>
        <td><p>$23,950</p></td>
        <td><p>$30,545</p></td> 
    </tr>
    <tr>
        <td><p>Toyota Corolla</p></td>
        <td><p>$25,500</p></td>
        <td><p>$23,185</p></td>
        <td><p>$27,900</p></td>
    </tr>
    <tr>
        <td><p>Kia Forte</p></td>
        <td><p>$23,500</p></td>
        <td><p>$21,145</p></td>
        <td><p>$26,000</p></td>
    </tr>
    <tr>
        <td><p>Chevorlet Trax</p></td>
        <td><p>$22,800</p></td>
        <td><p>$21,495</p></td>
        <td><p>$24,000</p></td>
    </tr>
</table>

<h3>Voting</h3>
<div>
    <button style="width:175px;"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd;">Honda Civic</p></button>
    <button style="width:175px"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Toyota Corolla</p></button>
    <button style="width:175px"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Kia Forte</p></button>
    <button style="width:175px"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Chevorlet Trax</p></button>
</div>

<h2>Discussion</h2>
<textarea placeholder="Enter your thoughts or comments here..." id="comment"></textarea>
<button onclick="addComment(22)"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>
</body>
</html>
