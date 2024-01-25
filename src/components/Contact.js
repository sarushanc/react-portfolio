import React from 'react';

const Contact = () => {
  const phoneNumber = '+94769980662';

  return (
    <section className="bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <ul>
        <li className="mb-2">
          <span className="font-bold">Email:</span> <a href="mailto:sarushan1994@gmail.com">sarushan1994@gmail.com</a>
        </li>
        <li className="mb-2">
          <span className="font-bold">LinkedIn:</span> <a href="https://linkedin.com/in/sarushan-chandrasehar-b79651100" target="_blank" rel="noopener noreferrer">linkedin.com/in/sarushan-chandrasehar-b79651100</a>
        </li>
        <li className="mb-2">
          <span className="font-bold">WhatsApp:</span> <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">+94769980662 (WhatsApp)</a>
        </li>
        <li>
          <span className="font-bold">GitHub:</span> <a href="https://github.com/sarushanc" target="_blank" rel="noopener noreferrer">github.com/sarushanc</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
