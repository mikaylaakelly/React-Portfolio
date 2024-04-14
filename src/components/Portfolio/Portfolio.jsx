import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Weather App',
        description: 'An app that you can use to search for the weather in a city and be provided with that day\'s weather and a 5-day forecast.',
        githubLink: 'https://github.com/mikaylaakelly/module-6-weatherAPI',
        deployedLink: 'https://mikaylaakelly.github.io/module-6-weatherAPI/'
    },
  {
    id: 2,
    title: 'Work Day Scheduler',
    description: 'A simple calendar app for scheduling your work day',
    githubLink: 'https://github.com/mikaylaakelly/module-5-calendar',
    deployedLink: 'https://mikaylaakelly.github.io/module-5-calendar/'
  },
  {
    id: 3,
    title: 'ReadMe Generator',
    description: 'Fusce id orci convallis, maximus mi nec, ultricies ipsum. Nullam hendrerit lorem ut ex placerat.',
    githubLink: 'https://github.com/mikaylaakelly/ReadMeGenerator',
    deployedLink: 'https://drive.google.com/file/d/1LspdURNtchZHVwCS5sCkwSPtpY9nlRaH/view'
  },
  {
    id: 4,
    title: 'Quiz App',
    description: 'A fun quiz app to quiz you on your beginner knowledge of coding.',
    githubLink: 'https://github.com/mikaylaakelly/module-4-quiz',
    deployedLink: 'https://mikaylaakelly.github.io/module-4-quiz/'
  },
  {
    id: 5,
    title: 'Recipe Place',
    description: 'A group project where we created an app that can search for recipes and ingredients that you have on hand, and returns a list of recipes you can make. You can then save the recipes you like to use later',
    githubLink: 'https://github.com/Ashloraptor/MARJ',
    deployedLink: 'https://ashloraptor.github.io/MARJ/'
  },
  {
    id: 6,
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
      <div className="project-list">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink}>Github Repo</a>
            <br />
            <a href={project.deployedLink}>Deployed Link/Video Walkthrough</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
// export default Portfolio;

// This is from activity 24/solved/components/pages/aboutpage THIS IS HOW I WANT THE PORTFOLIO PAGE TO LOOK
// export default function AboutPage() {
//     return (
//       <div className="container pt-4">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//           tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
//           impedit suscipit sed magnam alias in, repellat expedita hic explicabo
//           architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
//           adipisicing elit. Velit voluptate exercitationem quaerat pariatur
//           mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
//           nostrum temporibus ad omnis nam rerum eligendi.
//         </p>
//         <section className="features-icons bg-light text-center m-4">
//           <div className="container">
//             <div className="row p-2">
//               <div className="col-lg-4">
//                 <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                   <div className="features-icons-icon d-flex">
//                     <i className="bi-window m-auto text-primary" />
//                   </div>
//                   <h3>Fully Responsive</h3>
//                   <p className="lead mb-0">
//                     This theme will look great on any device, no matter the size!
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                   <div className="features-icons-icon d-flex">
//                     <i className="bi-layers m-auto text-primary" />
//                   </div>
//                   <h3>Bootstrap 5 Ready</h3>
//                   <p className="lead mb-0">
//                     Featuring the latest build of the new Bootstrap 5 framework!
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="features-icons-item mx-auto mb-0 mb-lg-3">
//                   <div className="features-icons-icon d-flex">
//                     <i className="bi-terminal m-auto text-primary" />
//                   </div>
//                   <h3>Easy to Use</h3>
//                   <p className="lead mb-0">
//                     Ready to use with your own content, or customize the source
//                     files!
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//           tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
//           impedit suscipit sed magnam alias in, repellat expedita hic explicabo
//           architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
//           adipisicing elit. Velit voluptate exercitationem quaerat pariatur
//           mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
//           nostrum temporibus ad omnis nam rerum eligendi.
//         </p>
//       </div>
//     );
//   }
  