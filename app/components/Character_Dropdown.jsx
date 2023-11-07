'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react'

export default function Dropdown() {
  const router = useRouter()

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="bg-blue-500 text-white text-xl font-semibold py-4 px-8 rounded hover:bg-blue-700 transition duration-300">
            Create Character
          </Menu.Button>
          <Transition
            enter="transition-transform-opacity duration-300 ease-out"
            enterFrom="-translate-y-10 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition-transform-opacity duration-300 ease-in"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-2 opacity-0"
          >
            <Menu.Items
              static
              className="absolute right-0 mt-0 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                      <button
                        onClick={() => router.push('/creation-page/')}
                        className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-700'
                        } block w-full text-right px-4 py-2 text-sm`}
                      >
                        Standard
                      </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-700'
                      } block w-full text-right px-4 py-2 text-sm`}
                      onClick={() => router.push('/creation-page/')}
                    >
                      Random
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}