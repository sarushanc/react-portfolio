import React from 'react';
import SharushanCV from '../sharushancv.pdf';

const CV = () => {
  return (
    <div
      name="cv"
      className="w-full bg-gray-900 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col">
        <h2 className="text-4xl font-bold mb-6">Curriculum Vitae</h2>

        <p className="mb-4 text-gray-300">
          You can <a
            href={SharushanCV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >view or download my CV</a> in a new tab.
        </p>

        <object
          data={SharushanCV}
          type="application/pdf"
          width="100%"
          height="800px"
          className="border"
        >
          <p className="text-gray-300">
            Your browser does not support displaying PDF files. <a href={SharushanCV} className="text-primary underline">Download the CV</a>.
          </p>
        </object>
      </div>
    </div>
  );
};

export default CV;
