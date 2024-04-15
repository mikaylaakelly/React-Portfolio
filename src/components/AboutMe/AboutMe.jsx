import React from "react";
import Family from '../../../assets/family.jpg';
import Portrait from '../../../assets/portrait.png';
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <h3>Welcome!</h3>
            <p>My name is Mikayla Martin and I am full time mom turned full stack developer.
                I took a bootcamp through the Ohio State University for full stack developement and it has furthered
                my love for programming and computers. All my life I've loved the styling side of coding and through this
                program I have learned so much about front and back end, and I hope to continue to grow and learn more 
                in the future.
            </p>
            <img src= {Family} alt="My Image" className="my-image" />
            <img src= {Portrait} alt="My Image" className="my-image" />
            <p>The links in my portfolio are all projects I have been able to create during the bootcamp I am currently enrolled in. I love to go all 
                out on design and putting my sparkle on things when I have enough time to do so. I consider all of these projects accomplishments but also 
                things that I can look back on and improve with what I learned further on in the future. I was also lucky enough to do both of our group projects
                with the same group of other full stack developers, and we were all passionate and loved the apps we worked on and plan to continue to work on them
                in the future and further the vision.
            </p>
        </div>
    );
}

export default AboutMe;