import React from 'react';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Careers at IntraWeb Technologies</h1>
        <p className="text-lg mb-8">Join our team and help us innovate, build, and empower businesses worldwide.</p>
        <div className="bg-gray-800 p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Available Positions</h2>
          <p className="text-gray-300">We currently have no open positions, but we are always looking for talented individuals to join our team. Please check back later or send your resume to <a href="mailto:careers@intrawebtech.com" className="text-orange-500 hover:underline">careers@intrawebtech.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage; 