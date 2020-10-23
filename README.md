# MockUni
CMPE172 Project. Mock Uni is a university and library management system that allows an admin user to view, add, edit, and delete students, books, and classes.

![Dashboard Inprogress Screenshot](/Demo/dash-inprogress.PNG)

## Requirements
- [Download Node](https://nodejs.org/en/download/)
- [Download Git](https://git-scm.com/downloads)

## Cloning the Repo
The following instructions will place the repo on your desktop. Feel free to put the repo anywhere you want.

- **Windows**
  - Open Powershell or CMD (Powershell Preferred)
  - Go into desktop directory 

    ``` cd Desktop  ```
  - Clone the MockUni repo

    ``` git clone https://github.com/johnsuico/MockUni.git ```
  - Go into MockUni Directory

- **Mac / Linux**
  - Open Terminal
  - Go into desktop directory

    ``` cd Desktop  ```
  - Clone the MockUni repo

    ``` git clone https://github.com/johnsuico/MockUni.git ```
  - Go into MockUni Directory

## Installing the packages
The following instructions will work on Windows/Mac/Linux

- Go into MockUni directory

  ``` cd MockUni ```
  - Install the neccessary packages for backend

    ``` npm install ```
  - Go into Client directory

    ``` cd client ```
  - Install the neccessary packages for react

    ``` npm install ```
  - Go back up one folder

    ``` cd .. ```
  - Start the application in development

    ``` npm run dev ```
  - OR Start the application in production

    ``` npm start ```

## Tech Stack
This project uses the MERN stack

- MongoDB
  - Our database
- Express
  - Node web application framework
- React
  - Frontend library
- Node
  - Javascript runtime

## Dependencies

- Backend
  - chart.js
    - To create bar graphs for analytics
  - Concurrently
    - To run backend and frontend at the same time
  - CORS
    - To allow for resource sharing between backend and frontend
  - Express
    - Backend framework
  - Mongoose
    - To handle database connections and queries
  - react-chartjs-2
    - To create bar graphs for analytics

- Backend Dev
  - Nodemon
    - To restart the server on save instead of restarting the server manually

- Frontend
  - Axios
    - To make request to the backend server
  - react-icons
    - To use icons in our applicaiton
  - react-router-dom
    - To create different pages for our application