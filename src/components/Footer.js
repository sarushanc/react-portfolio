import React from 'react';
import SharushanCV from '../sharushancv.pdf';

const Footer = () => {
    return (
        <div className="bg-dark text-gray-400 py-8 text-center">
            <p>© {new Date().getFullYear()} Chandrasekar Sharushan. All rights reserved.</p>
            <p className="mt-2"><a href={SharushanCV} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">View CV</a></p>
        </div>
    );
};

export default Footer;
