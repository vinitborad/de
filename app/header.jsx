// components/Header.js

import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-white text-xl font-bold">Learning Platform</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/signup">
                                <a className="text-white hover:text-gray-300">Sign Up</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <a className="text-white hover:text-gray-300">Login</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses">
                                <a className="text-white hover:text-gray-300">Courses</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
