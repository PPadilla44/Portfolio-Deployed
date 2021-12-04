import dicord from '../assets/dicord.gif';
import sced from '../assets/sced.gif';
import draw from '../assets/drawit.gif';

export const ProjectsData = [
    {
        title: "Draw It",
        src: draw,
        deployed: "http://3.128.205.160/",
        link: "https://github.com/PPadilla44/draw_something",
        description: [
            "Created a Python web application using the Flask framework for secure cookies and Jinja2 to safely store and display dynamically changing data.",
            "Saved and manipulated data using MYSQL for its data security and to easily create relationships between users and their creations.",
            "Engineered drawing functionality in JavaScript with the use of canvas, event listeners, and without use of libraries."
        ],
    },
    {
        title: "Discord Clone",
        src: dicord,
        deployed: false,
        link: "https://github.com/PPadilla44/Discord-Clone",
        description: [
            "Led a team to develop a clone of Discord using Nodejs back-end framework and React front-end framework for a responsive one page web application.",
            "Stored all data with MongoDB for a flexible schema and ability to quickly handle large amounts of data at high speeds.",
            "Implemented instant messaging with Socket.io so users can send and receive messages/notifications instantly without having to refresh the page."
        ],
    },
    {
        
        title: "Scheduling Web App",
        src: sced,
        link: "https://github.com/PPadilla44/Calendly",
        deployed: false,
        description: [
            "Developed Java web application using the Spring Boot framework for ease of dependency management.",
            "Integrated Google OAuth and Google Calendar API for personalized calendar access.",
            "Created a clickable calendar with JavaScript where admins can add events and customize availability."
        ]

    },

] 