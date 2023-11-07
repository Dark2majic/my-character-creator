'use client';

import React from 'react';
import Head from 'next/head';
import { ArrowLongLeftIcon,ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation'

export default function Description() {
    const router = useRouter();
  return (
    <>
      <Head>
        <title>Description</title>
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center font-bold my-4 font-serif">Character Description</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-5 gap-4 mb-4">
            <TextInput label="Name" />
            <TextInput label="Age" type="number" />
            <TextInput label="Gender" />
            <TextInput label="Height" />
            <TextInput label="Weight" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <TextInput label="Hair Color" />
            <TextInput label="Eye Color" />
            <TextInput label="Skin Color" />
          </div>
          <TextInput label="Character Appearance" textarea />
          <TextInput label="Character Backstory" textarea />
          <TextInput label="Additional Features" textarea />
          <div className='absolute bottom-4 left-4'>
                <button
                    onClick={() => router.back()}
                    className="flex items-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
                    Back
                </button>
            </div>
        </form>
      </div>
    </>
  );
}

function TextInput({ label, textarea, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-200 font-serif">{label}</label>
      {textarea ? (
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          rows={4}
        />
      ) : (
        <input
          type={type}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      )}
    </div>
  );
}
