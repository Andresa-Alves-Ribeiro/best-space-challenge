"use client"

import React from 'react';
import Foto from "../../assets/foto-1.jpg";
import Foto2 from "../../assets/foto-2.jpg";
import Image from 'next/image';
import { ReactTyped } from 'react-typed';

export function Hero() {
    return (
        <div className="pt-24 max-md:pt-6 h-full max-md:w-full">
            <div className="grid grid-cols-2">
                <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center mb-4 pt-28 max-md:pt-0 pl-44 max-md:pl-24 w-5/6 max-md:w-96">
                    <ReactTyped strings={["Seus dados seguros e salvos conosco"]} typeSpeed={50} className="font-bold text-3xl max-md:text-xl mb-8 max-md:mb-2 text-violet-900 cormorant-garamond-bold uppercase " />
                    <p className='text-slate-500 text-center max-md:text-justify pt-8'>
                        Na SendData Company, a segurança e a privacidade dos dados dos usuários são nossa prioridade máxima. Trabalhamos incansavelmente para garantir a confiança e a satisfação de nossos clientes, proporcionando uma experiência segura e transparente em todas as interações com os dados dos usuários.
                    </p>
                </div>

                <div className="image relative max-md:hidden">
                    <div className=''>
                        <div className='pt-8'>
                            <Image src={Foto} alt="Foto 1" width={500} height={500} className='rounded-xl' />
                        </div>

                        <div className="absolute top-1/2 left-1/4 rounded-lg overflow-hidden border-t-8 border-l-8 border-gray-200" >
                            <Image src={Foto2} alt="Foto 2" width={500} height={250} className='rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
