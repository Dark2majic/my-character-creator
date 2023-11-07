'use client';

import React from 'react';
import Dropdown from './components/Character_Dropdown.jsx'; // Adjust the path as necessary

export default function Page() {
  return (
    <div className="flex justify-center pt-20 space-x-40">
      <Dropdown />
      <button
        className="bg-green-500 text-white text-xl font-semibold py-4 px-8 rounded hover:bg-green-700 transition duration-300"
        onClick={() => alert('View Creations')}
      >
        View Creations
      </button>
    </div>
  );
} 