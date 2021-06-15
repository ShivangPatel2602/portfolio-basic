import React from "react";
import ProjectTemplate from "./ProjectTemplate";

function ProjectFinal() {
    return (
        <div>
            <h1 className="project-heading">Projects</h1>
            <ProjectTemplate
                projectHeading="Text Analyser"
                projectText="I made a simple web application wherein you input the text and the website will display the number of words in the paragraph that you put in and also display the number of special characters and numbers if any in the text."
            />

            <ProjectTemplate
                projectHeading="TinDog"
                projectText="I made a simple static website with the help of HTML and CSS. This website is related to an application for dogs to socialise them and gain knowledge about different breeds."
            />

            <ProjectTemplate
                projectHeading="Codify World Login Form"
                projectText="I made a detailed front-end login form for a hypothetical company called Codify World. The website has an option to register, login, read about the company, contact them, fill out their survey form and know about different pricing plans they offer."
            />

            <ProjectTemplate
                projectHeading="Full Stack Login Page"
                projectText="I made a login website which is fully functional in the front-end as well as back-end. The website stores the data of the user (username and password) with full authentication and encryption. The website also has an option to login using Google which adds more to the security of the user and keeps his/her data safe.This was a part of the Web Development course that I had taken on Udemy."
            />

            <ProjectTemplate
                projectHeading="Calculator Interface"
                projectText="With the help of ReactJS framework, I am making a creative calculator interface which displays numbers and different mathematical operations which the calculator can perform. In the end, it displays the required result."
            />

            <ProjectTemplate
                projectHeading="Money Tracker"
                projectText="As a part of a ReactJS course that I am doing on Udemy, I am making a ReactJS website that tracks the money that you spent on different things in a creative graphical way and stores the data of every month and year that you were active and busy spending your money."
            />
        </div>
    )
}

export default ProjectFinal;