import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import tw, { styled } from 'twin.macro';

function Dropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <>
            <div className="flex justify-center bg-yellow-300 v-screen">
                <div className="relative my-4">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="relative z-10 flex items-center p-2 rounded-md focus:outline-none">
                        {' '}
                        <span>Menu</span>
                        <svg
                            className="w-5 h-5 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div
                        css={[
                            tw`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`,
                            dropdownOpen ? tw`` : tw`hidden`
                        ]}>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 capitalize hover:bg-blue-500 hover:text-white">
                            your profile
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 capitalize hover:bg-blue-500 hover:text-white">
                            Your projects
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 capitalize hover:bg-blue-500 hover:text-white">
                            Help
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 capitalize hover:bg-blue-500 hover:text-white">
                            Settings
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 capitalize hover:bg-blue-500 hover:text-white">
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dropdown;
