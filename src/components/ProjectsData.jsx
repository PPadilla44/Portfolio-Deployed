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
            "Created a Python web application using the Flask framework for secure cookies and Jinja2 to store and display dynamically changing data safely.",
            "Saved and manipulated data using MYSQL for its data security and easily created relationships between users and their creations.",
            "Engineered drawing functionality in JavaScript with the use of canvas, event listeners, and without the use of libraries."
        ],
    },
    {
        title: "Discord Clone",
        src: dicord,
        deployed: false,
        link: "https://github.com/PPadilla44/Discord-Clone",
        description: [
            "Led a team to develop a clone of Discord using Nodejs back-end framework and React front-end framework for a responsive one-page web application",
            "Protected and verified a user's credentials using BCrypt to conceal a user's password in the database and Regular Expression (RegEx) to validate a user is providing a valid email and strong password.",
            "Implemented instant messages and notifications with Socket.io and the React Effect hook so users can send and receive messages and friend requests instantly without refreshing the page."
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