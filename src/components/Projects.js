import React from 'react';
import BookingAppImage from '../images/booking.jpeg';
import HangManImage from '../images/hangman.png';
import POSImage from '../images/pos.png';
// import ServiceHubImage from '../images/servicehub.jpeg';
import MedispiresImage from '../images/medispires.png';
import RecipeHubImage from '../images/recipes.png';
import DetectorImage from '../images/vehicle-detector.png';
import NICDecoder from '../images/nic-decoder.png';
import FamilyDriverImage from '../images/familydriver.png';
import ECommerceImage from '../images/ECommerce.png';
import ProjectManagerImage from '../images/project manager.png';

const Projects = () => {
  // add or update entries in this array to reflect the projects listed on your CV
  // make sure each object has a unique id, title, description, src, link (if available), and tech tag
  const projects = [
    {
      id: 10,
      title: 'Project Manager - Port City BPO',
      description: 'MERN platform for project planning, task tracking, and team coordination built for Port City BPO.',
      src: ProjectManagerImage,
      link: '',
      tech: 'MERN'
    },
    {
      id: 9,
      title: 'Supermeal.lk E-Commerce',
      description: 'Full-featured e-commerce platform for an export company with payment gateway integration.',
      src: ECommerceImage,
      link: 'https://supermeal.lk',
      tech: 'Full Stack'
    },
    {
      id: 1,
      title: 'Family Driver',
      description: 'Laravel backend system for driver bookings and ride tracking.',
      src: FamilyDriverImage,
      link: 'https://familydriver.lk',
      tech: 'Laravel'
    },
    {
      id: 2,
      title: 'Booking App',
      description: 'Backend and APIs for a mobile booking application.',
      src: BookingAppImage,
      link: '',
      tech: 'Laravel'
    },
    {
      id: 3,
      title: 'HangMan Multiplayer',
      description: 'Interactive Python-based multiplayer Hangman game.',
      src: HangManImage,
      link: '',
      tech: 'Python'
    },
    {
      id: 4,
      title: 'Vehicle Detection GUI',
      description: 'YOLO model and Tkinter based vehicle detection system.',
      src: DetectorImage,
      link: '',
      tech: 'Python'
    },
    {
      id: 5,
      title: 'POS System',
      description: 'Point-of-sale system for pharmacy management.',
      src: POSImage,
      link: '',
      tech: 'Laravel'
    },
    {
      id: 6,
      title: 'NIC Decoder',
      description: 'React web app to decode Sri Lankan NIC details.',
      src: NICDecoder,
      link: 'https://sarushanc.github.io/nic_decode/',
      tech: 'React'
    },
    {
      id: 7,
      title: 'Medispires Invoice Management',
      description: 'MERN-based invoice management system for a medical agency.',
      src: MedispiresImage,
      link: 'https://medispires.esanwin.com/',
      tech: 'MERN'
    },
    {
      id: 8,
      title: 'Recipe Hub',
      description: 'Flask-based web platform for sharing recipes.',
      src: RecipeHubImage,
      link: '',
      tech: 'Python'
    },
  ];

  return (
    <div
      name="projects"
      className="relative bg-gradient-to-b from-dark via-slate-900 to-gray-900 w-full text-white min-h-screen py-20"
    >
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"></div>
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full relative z-10">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Projects
          </p>
          <p className="py-6 text-gray-300 max-w-2xl">
            Selected projects across MERN, Laravel, and Python focused on practical business solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, src, title, description, tech, link }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-800/50 backdrop-blur-sm shadow-lg shadow-black/20 duration-300 hover:-translate-y-1 hover:border-cyan-500/70"
            >
              <img
                src={src}
                alt={title}
                className="h-48 w-full object-cover duration-300 hover:scale-105"
              />
              <div className="p-5">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/15 text-cyan-300 border border-cyan-400/20">
                  {tech}
                </div>
                <h3 className="text-lg font-bold text-white mt-3">{title}</h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed min-h-[60px]">{description}</p>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    View project
                  </a>
                ) : (
                  <span className="inline-block mt-4 text-sm font-medium text-slate-400">
                    Private project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
