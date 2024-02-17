"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from "../../../public/logo.svg"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <header className="flex flex-row h-24 items-center justify-between w-full">
            <div className="flex flex-row items-center gap-20">
                <Image src={Logo} alt='Logo' width={150} height={150} />
                <div className="md:hidden ml-6">
                    <button onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>

            {showMenu && (
                <nav className="block lg:hidden mt-4">
                    <ul className="flex flex-row items-center text-xs gap-3 pr-8">
                        <li className="py-2">
                            <Link href='/' className="text-blue-900 hover:text-violet-800">Home</Link>
                        </li>
                        <li className="py-2">
                            <Link href='#formulario' className="text-blue-900 hover:text-violet-800">Formulário</Link>
                        </li>
                    </ul>
                </nav>
            )}

<nav className="hidden md:flex md:flex-row my-2 mr-24">
    <ul className="flex flex-row gap-6">
        <li className="pr-6">
            <Link href={'/'} className="text-blue-900 text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">Home</Link>
        </li>
        <li className="pl-4 pr-4">
            <Link href={'/formulario'} className="text-blue-900 text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">Formulário</Link>
        </li>
    </ul>
</nav>

        </header>
    );
}

export default Header;