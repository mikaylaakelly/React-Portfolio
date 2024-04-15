import React from 'react';
import WeatherIcon from '../../../assets/weather.jpg';
import ScheduleIcon from '../../../assets/schedule.png';
import TypewriterIcon from '../../../assets/typewriter.jpg';
import QuestionIcon from '../../../assets/question.jpg';
import RecipeIcon from '../../../assets/food.jpg';
import PlantIcon from '../../../assets/plants.jpg'
import './Portfolio.css';




const projects = [
    {
        id: 1,
        img: WeatherIcon,
        title: 'Weather App',
        description: 'An app that you can use to search for the weather in a city and be provided with that days weather and a 5-day forecast.',
        githubLink: 'https://github.com/mikaylaakelly/module-6-weatherAPI',
        deployedLink: 'https://mikaylaakelly.github.io/module-6-weatherAPI/'
    },
  {
    id: 2,
    img: ScheduleIcon,
    title: 'Work Day Scheduler',
    description: 'A simple calendar app for scheduling your work day.',
    githubLink: 'https://github.com/mikaylaakelly/module-5-calendar',
    deployedLink: 'https://mikaylaakelly.github.io/module-5-calendar/'
  },
  {
    id: 3,
    img: TypewriterIcon,
    title: 'ReadMe Generator',
    description: 'A command line series of prompts that you answer and the application will then generate a professional looking ReadMe for your project.',
    githubLink: 'https://github.com/mikaylaakelly/ReadMeGenerator',
    deployedLink: 'https://drive.google.com/file/d/1LspdURNtchZHVwCS5sCkwSPtpY9nlRaH/view'
  },
  {
    id: 4,
    img: QuestionIcon,
    title: 'Quiz App',
    description: 'A fun quiz app to quiz you on your beginner knowledge of coding.',
    githubLink: 'https://github.com/mikaylaakelly/module-4-quiz',
    deployedLink: 'https://mikaylaakelly.github.io/module-4-quiz/'
  },
  {
    id: 5,
    img: RecipeIcon,
    title: 'Recipe Place',
    description: 'A group project where we created an app that can search for recipes and ingredients that you have on hand, and returns a list of recipes you can make. You can then save the recipes you like to use later.',
    githubLink: 'https://github.com/Ashloraptor/MARJ',
    deployedLink: 'https://ashloraptor.github.io/MARJ/'
  },
  {
    id: 6,
    img: PlantIcon,
    title: 'Compendium',
    description: 'A plant identifying app where you can create a profile and then use the user input and plant.id API to pull up information on plants that you can save to your profile.',
    githubLink: 'https://github.com/Ashloraptor/Compendium',
    deployedLink: 'https://compendium-256a42904ce0.herokuapp.com/'
  }
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project d-flex flex-wrap">
        {projects.map((project,key) => (
          < div key={key} className="card">
          <img src={project.img} className="card-img-top" alt={project.title}/>
          <div className="portfolio">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <a href={project.githubLink} className="btn btn-primary">Github Link</a>
            <a href={project.deployedLink} className="btn btn-primary">Deployed Link/Video Walkthrough</a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}


export default Portfolio;


