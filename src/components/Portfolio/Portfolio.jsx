import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel velit nec sem suscipit tristique.'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Fusce id orci convallis, maximus mi nec, ultricies ipsum. Nullam hendrerit lorem ut ex placerat.'
    }
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

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
  