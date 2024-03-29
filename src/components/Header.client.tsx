'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image width={512} height={512} className="h-8 w-8" src="/cheatersgambit.png" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">The Cheaters Gambit</span>
                </div>

                {/* Hamburger Button for small screens to open a menu */}
                <button onClick={toggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Menu */}
                <div className={isOpen ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="px-4 py-2">
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li className="px-4 py-2"><a href='https://jessepirrotta.dev' target='_none'>The Developer</a> </li>
                        <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" href='/game'>🎮Download on Itch!🎮</Link>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;