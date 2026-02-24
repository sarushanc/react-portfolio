import React from 'react';
import SharushanCV from '../sharushancv.pdf';

const AboutMe = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-900 to-dark text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 text-gray-300 leading-relaxed">
          I am a Full Stack Developer with strong backend expertise in Laravel and practical experience delivering modern web products with MERN, React, and Tailwind CSS. I focus on building solutions that are stable, maintainable, and aligned with business workflows.
        </p>

        <br />

        <p className="text-xl text-gray-300 leading-relaxed">
          Alongside web development, I actively work with Python for automation and intelligent systems. You can find details of my project history, education, and technical experience in the CV linked below.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div className="shadow-md shadow-black/30 hover:-translate-y-1 duration-300 py-4 rounded-lg bg-slate-800 border border-slate-700">
            <p className="font-bold text-xl text-primary">Frontend</p>
            <p className="mt-2 text-gray-400">React, Tailwind, Bootstrap</p>
          </div>
          <div className="shadow-md shadow-black/30 hover:-translate-y-1 duration-300 py-4 rounded-lg bg-slate-800 border border-slate-700">
            <p className="font-bold text-xl text-secondary">Backend</p>
            <p className="mt-2 text-gray-400">Laravel, Node, Python</p>
          </div>
          <div className="shadow-md shadow-black/30 hover:-translate-y-1 duration-300 py-4 rounded-lg bg-slate-800 border border-slate-700">
            <p className="font-bold text-xl text-sky-400">Database</p>
            <p className="mt-2 text-gray-400">SQL, MongoDB</p>
          </div>
          <div className="shadow-md shadow-black/30 hover:-translate-y-1 duration-300 py-4 rounded-lg bg-slate-800 border border-slate-700">
            <p className="font-bold text-xl text-emerald-400">Tools</p>
            <p className="mt-2 text-gray-400">Git, Docker</p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={SharushanCV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >View or download my CV</a>
        </div>

        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
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
