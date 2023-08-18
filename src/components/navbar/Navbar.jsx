import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigation = useNavigate();

    return (
        <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between">
            <div className="text-white text-2xl font-semibold">MovieFlix</div>
            <div className="hidden sm:flex space-x-4 flex-row gap-24">
                <a href="/" className="text-white hover:text-yellow-400 transition">Popular</a>
                <a href="top-rated" className="text-white hover:text-yellow-400 transition">Top Rated</a>
                <a href="upcoming" className="text-white hover:text-yellow-400 transition">Upcoming</a>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-300 transition"
                    onClick={() => navigation('/search')}
                >
                    Search
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

