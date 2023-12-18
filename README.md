# Description

The YogaFlex is a user interface designed for individuals interested in enrolling in monthly yoga classes. The form collects essential participant details, including name and age, and allows users to choose a preferred class batch from four available time slots. 
Participants can pay the monthly fee at any time during the month. The form incorporates age validation, ensuring enrollees are within the 18-65 age range. 
The collected information is submitted to a backend server, which handles data validation, storage in a MongoDB database. 
The form is built using React for the frontend and communicates with a REST API for backend functionality. 
The UI features a visually appealing design with yoga-themed images, creating an inviting and user-friendly experience for potential yoga class participants.

# Guide

YogaFlex app comprises of two processes, namely -
* Frontend (React)
* Backend (Nodejs, Express, Mongodb)

So both the processes need to be running concurrently for the proper functioning of the app. We do so by following the following steps :

1. Download the folder on your local machine to whatever location you feel comfortable with as a zip and unzip it.
1. Create a new file in the folder just parallel to index.js named as “.env” and paste the following line on that file `` URI = "mongodb+srv://sahilpatil0812:ivKHxCtBo21CfvCO@yogaflex.sffwjyg.mongodb.net/?retryWrites=true&w=majority" ’’
1. Open two concurrent terminals for two separate processes, and move to the project folder on both terminals(frontend & backend).
1. Type `` cd frontend `` on one terminal and `` cd backend `` on another terminal.
1. Run following commands on backend terminal, which will run our backend Server.
   > npm install

   > node index.js

1. Run following commands on frontend terminal, which will run our frontend Server.
   > npm install

   > npm start

1. Move to frontend section.

# Screenshot

![Screenshot of YogaFlex homepage](https://github.com/sahil0812/YogaFlex/blob/main/ss/yogaForm.png)
