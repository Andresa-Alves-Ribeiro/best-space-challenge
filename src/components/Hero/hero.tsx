"use client"

import React from 'react';
import Foto from "../../assets/foto-1.jpg";
import Foto2 from "../../assets/foto-2.jpg";
import Image from 'next/image';
import { ReactTyped } from 'react-typed';

export function Hero() {
    return (
        <div className="pt-44 h-full">
            <div className="grid grid-cols-2">
                <div className="mx-6 text-center mb-4 pt-28 pl-44 w-5/6">
                    <ReactTyped strings={["Seus dados seguros e salvos conosco"]} typeSpeed={50} className="font-bold text-5xl mb-8 text-violet-900 cormorant-garamond-bold uppercase" />
                    <p className='text-slate-500 text-left pt-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum voluptate lorem amet doloribus.
                    </p>
                </div>

                <div className="image relative">
                    <div className=''>
                        <div className='pt-8'>
                            <Image src={Foto} alt="Foto 1" width={500} height={500} className='rounded-xl' />
                        </div>

                        <div className="absolute top-1/2 left-1/4 rounded-lg overflow-hidden border-t-8 border-l-8 border-slate-100" >
                            <Image src={Foto2} alt="Foto 2" width={500} height={250} className='rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
