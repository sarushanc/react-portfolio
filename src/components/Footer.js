import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-gray-400 py-8 text-center">
            <p>© {new Date().getFullYear()} Chandrasekar Sharushan. All rights reserved.</p>
        </div>
    );
};

export default Footer;
