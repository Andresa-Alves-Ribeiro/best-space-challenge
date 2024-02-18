"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from "../../../public/logo.svg";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <header className="bg-[#e3ebf0] flex flex-wrap md:flex-nowrap items-center justify-between w-full px-4 md:px-0 py-3 md:py-0">
            <div className="flex items-center justify-between w-full">
                <div>
                    <Image src={Logo} alt='Logo' width={100} height={100} />
                </div>

                <div className="md:hidden flex flex-row-reverse gap-2">
                    <button onClick={toggleMenu}>
                        <FaBars />
                    </button>
                    <div className={`md:hidden bg-violet-200 rounded-md px-4 py-2 ${showMenu ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col md:flex-row md:gap-6 md:mt-0">
                            <li className="py-2 md:py-0">
                                <Link href='#hero' className="text-violet-800 hover:text-violet-500 hover:border-b-2 hover:border-violet-400">Home</Link>
                            </li>
                            <li className="py-2 md:py-0">
                                <Link href='#formulario' className="text-violet-800 hover:text-violet-500 hover:border-b-2 hover:border-violet-400">Formulário</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="md:flex md:flex-row md:items-center w-full md:w-auto max-md:w-44 md:pr-8">
                {!showMenu && (
                    <ul className="flex flex-row gap-6 max-md:hidden">
                        <li className="pr-6">
                            <Link href='#hero' className="text-violet-900 text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:text-violet-500 hover:border-b-2 hover:border-violet-500">Home</Link>
                        </li>
                        <li className="pl-4 pr-4">
                            <Link href='#formulario' className="text-violet-900 text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:text-violet-500 hover:border-b-2 hover:border-violet-500">Formulário</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Header;
