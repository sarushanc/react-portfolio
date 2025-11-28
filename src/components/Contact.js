import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  // TODO: Replace these with your actual EmailJS credentials
  // Get them from https://www.emailjs.com/
  const SERVICE_ID = 'service_l2l9y65';
  const TEMPLATE_ID = 'template_1j0kd3g';
  const PUBLIC_KEY = 'cs1s4C0l3fhNhXOU_';

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-dark p-4 text-white py-16"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary transition-colors duration-300"
            ></textarea>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="text-white bg-gradient-to-r from-primary to-secondary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : "Let's talk"}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center -mt-4">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center -mt-4">
                ✗ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
