import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Footer() {
    return (
        <div className='bg-violet-900'>
            <div className=" mx-auto px-14 py-8 flex flex-col justify-around lg:flex-row gap-8">
                <div className='lg:w-1/4 text-center'>
                    <h2 className='text-white font-bold uppercase lg:pr-6 text-2xl'>SendData Company</h2>
                    <p className='text-white pt-4 text-start'>A SendData Company é uma empresa que se destaca no campo da proteção de dados e privacidade do usuário. Nosso principal objetivo é oferecer soluções inovadoras para empresas que coletam, armazenam e utilizam dados dos usuários.</p>
                </div>

                <div className='lg:w-1/6 flex flex-col gap-4'>
                    <h3 className='text-white text-center font-bold border-b max-md:border-b-0 max-md:pt-4 max-md:border-t border-slate-300'>REDES SOCIAIS</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/andresa-alves-ribeiro" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-2'>
                            <LinkedInIcon style={{ fontSize: 20, color: '#ffffff' }} />
                            <p className='text-white hover:text-purple-300 hover:border-b hover:border-purple-400'>Linkedin</p>
                        </a>
                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <a href="https://github.com/Andresa-Alves-Ribeiro" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-2'>
                            <GitHubIcon style={{ fontSize: 20, color: '#ffffff' }} />
                            <p className='text-white hover:text-purple-300 hover:border-b hover:border-purple-400'>Github</p>
                        </a>
                    </div>
                </div>

                <div className='lg:w-1/6 flex flex-col gap-4 lg:-mt-2'>
                    <h2 className='text-white text-center font-bold border-b max-md:border-b-0 max-md:pt-4 max-md:border-t border-slate-300'>CONTATO</h2>
                    <p className='text-white text-center'><HomeIcon style={{ fontSize: 20, color: '#ffffff' }} /> Rua das Flores, 123</p>
                    <p className='text-white text-center'><EmailIcon style={{ fontSize: 20, color: '#ffffff' }} /> andresa_15ga@hotmail.com</p>
                    <p className='text-white text-center'><PhoneAndroidIcon style={{ fontSize: 20, color: '#ffffff' }} /> +55 19 99999-9999</p>
                </div>
            </div>

            <div className='bg-violet-800 py-2'>
                <p className='text-white text-center'>© 2024 Copyright. All rights reserved</p>
            </div>
        </div>
    );
}
