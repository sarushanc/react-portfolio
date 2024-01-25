import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BookingAppImage from '../images/booking.jpeg';
import POSImage from '../images/pos.jpeg';
import ServiceHubImage from '../images/servicehub.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'Booking App (Laravel)',
      description: 'This is a booking app project where I developed the backend and APIs for the mobile app. I used Laravel, HTML, CSS, JavaScript, jQuery, Bootstrap, and MySQL to build the system.',
      imageUrl: BookingAppImage,
    },
    {
      title: 'POS System (Laravel)',
      description: 'This is a point-of-sale (POS) system developed for a pharmacy. It is designed to streamline the sales and inventory management processes, making it easier for the pharmacy to manage their operations efficiently.\n\nThe system was built using Laravel, HTML, CSS, JavaScript, and MySQL. It provides a user-friendly interface for handling various tasks, such as processing sales, managing inventory, generating reports, and tracking customer information.',
      imageUrl: POSImage,
    },
    {
      title: 'ServiceHub App (Laravel)',
      description: 'This is a services related app project where I developed the backend and APIs for the mobile app. I used Laravel, HTML, CSS, JavaScript, jQuery, Bootstrap, and MySQL to build the system.',
      imageUrl: ServiceHubImage,
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
