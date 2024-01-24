import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description for Project 1' },
    { title: 'Project 2', description: 'Description for Project 2' },
    // Add more project details as needed
  ];

  return (
    <section className="bg-gray-200 p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
