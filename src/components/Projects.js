import React from 'react';
import BookingAppImage from '../images/booking.jpeg';
import HangManImage from '../images/hangman.png';
import POSImage from '../images/pos.jpeg';
import ServiceHubImage from '../images/servicehub.jpeg';
import RecipeHubImage from '../images/recipes.png';
import DetectorImage from '../images/vehicle-detector.png';
import NICDecoder from '../images/nic-decoder.png';
import FamilyDriverImage from '../images/familydriver.png';
import ECommerceImage from '../images/ECommerce.png';

const Projects = () => {
  const projects = [
    {
      id: 9,
      title: 'E-Commerce Website',
      description: 'Full-featured e-commerce platform for an export company with payment gateway integration.',
      src: ECommerceImage,
      link: '',
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
      title: 'ServiceHub App',
      description: 'Backend and APIs for a service-related mobile app.',
      src: ServiceHubImage,
      link: '',
      tech: 'Laravel'
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
      className="bg-gradient-to-b from-dark to-gray-900 w-full text-white min-h-screen py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, description, link, tech }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 group relative overflow-hidden">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-48 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
                <span className="text-xs font-semibold text-primary mt-1">{tech}</span>
              </div>
              <div className="flex items-center justify-center bg-gray-800 rounded-b-lg">
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer" className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-primary rounded-md">
                    Demo
                  </a>
                ) : (
                  <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 cursor-default text-gray-500">
                    No Demo
                  </button>
                )}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
