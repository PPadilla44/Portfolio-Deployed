import dicord from '../assets/dicord.gif';
import sced from '../assets/sced.gif';

export const ProjectsData = [
    {
        title: "Scheduling Web App",
        src: sced,
        link: "https://github.com/PPadilla44/Calendly",
        description: [
            "Developed web application using Spring Boot framework for ease of dependency management.",
            "Integrated Google OAuth and Google Calendar API for personalized calendar access.",
            "Created a clickable calendar with JavaScript where admins can add events and customize availability."
        ]

    },
    {
        title: "Discord Clone",
        src: dicord,
        link: "https://github.com/PPadilla44/Discord-Clone",
        description: [
            "Led a team to develop a clone of Discord using Nodejs back-end framework and React front-end framework for a responsive one page web application.",
            "Stored all data with MongoDB for a flexible schema and ability to quickly handle large amounts of data at high speeds.",
            "Received data from database using Axios and Cors to be able to make multiple requests to the database server with full CRUD"
        ],
    }
] 