import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Footer() {
    return (
        <div className='h-80 bg-violet-900 flex flex-col justify-between'>
            <div className="flex flex-row gap-4 justify-between px-52 pt-14">
                <div className='flex flex-col px-4 w-2/6 pt-4'>
                    <h2 className='text-white text-center font-bold uppercase text-2xl'>SendData Company</h2>
                    <p className='text-white text-start pt-4'>A SendData Company é uma empresa que se destaca no campo da proteção de dados e privacidade do usuário. Nosso principal objetivo é oferecer soluções inovadoras para empresas que coletam, armazenam e utilizam dados dos usuários.</p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <h3 className='text-white text-center text-lg font-bold border-b border-slate-300'>REDES SOCIAIS</h3>
                    <div >
                        <a href="https://www.linkedin.com/in/andresa-alves-ribeiro" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2'>
                            <LinkedInIcon style={{ fontSize: 20, color: '#ffffff' }} />
                            <p className='text-white text-center hover:text-violet-500'>Linkedin</p>
                        </a>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <a href="https://github.com/Andresa-Alves-Ribeiro" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2'>
                            <GitHubIcon style={{ fontSize: 20, color: '#ffffff' }} />


                            <p className='text-white text-center'>Github</p>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col gap-2 items-start pt-5'>
                    <h2 className='text-white text-center text-lg font-bold border-b border-slate-300'>CONTATO</h2>

                    <p className='text-white text-center'><HomeIcon style={{ fontSize: 20, color: '#ffffff' }} /> Rua das Flores, 123</p>
                    <p className='text-white text-center'><EmailIcon style={{ fontSize: 20, color: '#ffffff' }} /> andresa_15ga@hotmail.com</p>
                    <p className='text-white text-center'><PhoneAndroidIcon style={{ fontSize: 20, color: '#ffffff' }} /> +55 19 99999-9999</p>
                </div>
            </div>

            <div className='bg-violet-800 py-2'>
                <p className='text-white text-center'>© 2024 Copyright All rights reserved</p>
            </div>
        </div>
    );
};
