'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Class_List from '../components/Class_List'; // Adjust the path as necessary
import Race_List from '../components/Race_List';
import { ArrowLongLeftIcon,ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { classes, races } from '../components/data';

export default function Create() {
    const router = useRouter();
    const [selectedClass, setSelectedClass] = useState(classes[0]); // Default selection
    const [selectedRace, setSelectedRace] = useState(races[0]); // Default selection


    return (
        <div className='flex justify-center pt-20'>
            <Class_List selected={selectedClass} setSelected={setSelectedClass} />
            <Race_List selected={selectedRace} setSelected={setSelectedRace} />
            <div className='absolute bottom-4 left-4'>
                <button
                    onClick={() => router.back()}
                    className="flex items-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
                    Back
                </button>
            </div>
            <div className='absolute bottom-4 right-4'>
                <button
                    onClick={() => router.push('/creation-page/description/')} 
                    className="flex items-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    <ArrowLongRightIcon className="h-5 w-5 mr-2" />
                    Continue
                </button>
            </div>
        </div>
    );
}