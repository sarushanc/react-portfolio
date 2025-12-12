import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ProfileImage from '../images/sharushan.jpg';

const Hero = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-dark via-dark to-gray-900 text-white"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-7xl font-bold text-white"
                    >
                        I'm a Full Stack Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-400 py-4 max-w-md text-lg"
                    >
                        I have a passion for building and designing software. Currently, I love to work on web application using technologies like Laravel, React, Tailwind, and Python.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex gap-4"
                    >
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-secondary cursor-pointer hover:scale-105 duration-300"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300 ml-2">
                                ➡️
                            </span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="flex mt-8 gap-6 text-gray-400"
                    >
                        <a href="https://github.com/sarushanc" target="_blank" rel="noreferrer" className="hover:text-primary duration-300 text-3xl"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sharushan-chandrasekar-b79651100/" target="_blank" rel="noreferrer" className="hover:text-primary duration-300 text-3xl"><FaLinkedin /></a>
                        <a href="https://x.com/sarushan1994" target="_blank" rel="noreferrer" className="hover:text-primary duration-300 text-3xl"><FaXTwitter /></a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center mt-10 md:mt-0"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <img
                            src={ProfileImage}
                            alt="my profile"
                            className="rounded-2xl mx-auto w-full h-full object-cover shadow-2xl border-4 border-gray-800 relative z-10 transform hover:scale-105 duration-500"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
