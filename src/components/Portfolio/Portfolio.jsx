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