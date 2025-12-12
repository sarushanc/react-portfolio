import React from 'react';

const AboutMe = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-900 to-dark text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-gray-300 leading-relaxed">
          I am a dedicated Full Stack Developer with strong expertise in Laravel for backend development. I specialize in building robust, scalable web applications with Laravel, combined with modern front-end technologies like React and Tailwind CSS.
          My journey in tech has been driven by a curiosity to understand how things work and a desire to create impactful solutions.
        </p>

        <br />

        <p className="text-xl text-gray-300 leading-relaxed">
          I am particularly proficient in Laravel, having developed multiple projects with its MVC architecture, Eloquent ORM, and powerful features. Beyond Laravel, I am an enthusiast of Python and AI, constantly exploring new libraries and frameworks to stay ahead of the curve.
          I believe in clean code, continuous learning, and the power of collaboration to bring great ideas to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 rounded-lg bg-gray-800">
            <p className="font-bold text-xl text-primary">Frontend</p>
            <p className="mt-2 text-gray-400">React, Tailwind, Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 rounded-lg bg-gray-800">
            <p className="font-bold text-xl text-secondary">Backend</p>
            <p className="mt-2 text-gray-400">Laravel, Node, Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 rounded-lg bg-gray-800">
            <p className="font-bold text-xl text-blue-500">Database</p>
            <p className="mt-2 text-gray-400">SQL, MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 rounded-lg bg-gray-800">
            <p className="font-bold text-xl text-green-500">Tools</p>
            <p className="mt-2 text-gray-400">Git, Docker</p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <div className="mt-8">
            <div className="py-6">
              <p className="text-xl font-bold text-white">
                Higher Diploma in Information Technology
              </p>
              <p className="text-gray-400">
                UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING
              </p>
              <p className="text-gray-500 text-sm">2024</p>
            </div>
            <div className="py-6 border-t border-gray-700">
              <p className="text-xl font-bold text-white">
                BEng (Hons) Software Engineering
              </p>
              <p className="text-gray-400">METROPOLITAN UNIVERSITY LONDON</p>
              <p className="text-gray-500 text-sm">2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
