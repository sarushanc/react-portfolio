import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BookingAppImage from '../images/booking.jpeg';
import HangManImage from '../images/hangman.png';
import POSImage from '../images/pos.jpeg';
import ServiceHubImage from '../images/servicehub.jpeg';
import RecipeHubImage from '../images/recipes.png';
import DetectorImage from '../images/vehicle-detector.png';
import NICDecoder from '../images/nic-decoder.png';

const Projects = () => {
  const projects = [
    {
      title: 'Booking App (Laravel Web)',
      description: 'This is a booking app project where I developed the backend and APIs for the mobile app. I used Laravel, HTML, CSS, JavaScript, jQuery, Bootstrap, and MySQL to build the system.',
      imageUrl: BookingAppImage,
    },
    {
      title: 'HangMan Multiplayer (Python App)',
      description: 'The Hangman Multiplayer Game is an engaging and interactive Python-based application that brings the classic Hangman game to life with a multiplayer twist. Developed using the power of Python, this game utilizes popular libraries and modules such as pickle, sys, pygame, socket, and more to create a seamless and entertaining gaming experience.',
      imageUrl: HangManImage,
    },
    {
      title: 'Vehicle Detection GUI (Python)',
      description: 'This Python script implements a Vehicle Detection GUI using the YOLO (You Only Look Once) model and Tkinter. It reads an image, processes it with YOLO, and displays the results in a Tkinter GUI. The script includes a canvas for the original image with bounding boxes around detected vehicles and a listbox showing details of each identified vehicle. The YOLO model is loaded using OpenCV, and the GUI is developed with Tkinter. This project showcases the integration of computer vision techniques and graphical user interfaces for real-world applications.',
      imageUrl: DetectorImage,
    },
    {
      title: 'POS System (Laravel Web)',
      description: 'This is a point-of-sale (POS) system developed for a pharmacy. It is designed to streamline the sales and inventory management processes, making it easier for the pharmacy to manage their operations efficiently.\n\nThe system was built using Laravel, HTML, CSS, JavaScript, and MySQL. It provides a user-friendly interface for handling various tasks, such as processing sales, managing inventory, generating reports, and tracking customer information.',
      imageUrl: POSImage,
    },
    {
      title: 'NIC Decoder (React Web)',
      description: (
        <>
          Uncover the secrets hidden in Sri Lankan National Identity Cards (NIC) with the NIC Decoder React Web App. This innovative project allows users to effortlessly decode crucial details like gender and date of birth by simply inputting the NIC number. Crafted with React, the NIC Decoder offers an intuitive and responsive interface for swift information retrieval. Visit the NIC Decoder at{' '}
          <a href="https://sarushanc.github.io/nic_decode/" target="_blank" rel="noopener noreferrer">
            https://sarushanc.github.io/nic_decode/
          </a>{' '}
          to experience a seamless and efficient way to decode NIC details.
        </>
      ),
      imageUrl: NICDecoder,
    },
    {
      title: 'ServiceHub App (Laravel Backend Web)',
      description: 'This is a services related app project where I developed the backend and APIs for the mobile app. I used Laravel, HTML, CSS, JavaScript, jQuery, Bootstrap, and MySQL to build the system.',
      imageUrl: ServiceHubImage,
    },
    {
      title: 'Recipe Hub (Python Web)',
      description: 'Recipe Hub is a secure and user-friendly web platform for culinary enthusiasts. Developed with Flask (Python), SQLite, and the power of regex, this web app provides a seamless CRUD interface for creating, organizing, and sharing recipes. User authentication is ensured using Werkzeug for password security. Explore a diverse collection of recipes, rate and review, and enjoy a personalized dashboard in this interactive cooking experience.',
      imageUrl: RecipeHubImage, 
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-200 p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            {project.imageUrl && (
              <div className="flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Preview`}
                  className="rounded-md shadow-md max-w-full h-auto"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            )}
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
