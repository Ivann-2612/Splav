import React from 'react';

function Navbar() {
    return (
        <div classNAme="navbar">
            <nav class="flex items-center bg-black shadow-lg text-black p-3 flex-wrap">
                    <a href="blank" class="p-2 mr-4 inline-flex items-center">
                    <span class="text-xl text-blue-800 mx-1 text-white font-bold uppercase tracking-wide">Splav</span> <span class="text-xl mx-2 text-white font-bold uppercase tracking-wide"> na</span> <span class="text-xl text-red-500 text-white font-bold uppercase tracking-wide">  Savi</span>
                    </a>
                    <button
                        class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                        data-target="#navigation"
                    >
                        <i class="material-icons">menu</i>
                    </button>
                    <div
                        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                        id="navigation"
                    >
                        <div
                            class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                        >
                            <a
                                href="blank"
                            class="lg:inline-flex text-lg lg:w-auto w-full px-3 py-2 mx-10 rounded text-gray-500 font-bold items-center justify-center"
                            >
                                <span>Home</span>
                            </a>
                            <a
                                href="blank"
                            class="lg:inline-flex text-lg lg:w-auto w-full px-3 py-2 mx-10  rounded text-gray-500 font-bold items-center justify-center"
                            >
                                <span>About</span>
                            </a>
                            <a
                                href="blank"
                            class="lg:inline-flex text-lg lg:w-auto w-full px-3 py-2 mx-10  rounded text-gray-500 font-bold items-center justify-center"
                            >
                                <span>Gallery</span>
                            </a>
                            <a
                                href="blank"
                            class="lg:inline-flex text-lg lg:w-auto w-full px-3 py-2 mx-4 rounded text-gray-500 font-bold items-center justify-center"
                            >
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Navbar
