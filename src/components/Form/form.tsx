"use client"

import React, { useState } from 'react';
import { Button, Textarea } from '@mui/joy';
import SelectForm from '../Select/select';

export default function Form() {
    const [data, setData] = useState<string[]>();

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className="mt-96 w-full mb-24 flex justify-center items-center" id='formulario'>
            <div className="w-full max-w-7xl">
                <div className='flex flex-row'>
                    <div className="w-3/6 bg-violet-900 shadow-2xl border border-violet-900 py-24 px-20 rounded-tl-3xl rounded-bl-3xl" style={{ maxHeight: '580px' }}>
                        <h1 className='text-white text-xl pb-8 -mt-14'>Preencha os dados corretamente e veja os dados ao lado</h1>
                        <div>
                            <label className='text-white'>Nome:</label>
                            <Textarea
                                disabled={false}
                                minRows={2}
                                size="lg"
                                variant="outlined"
                                className="w-6/6"
                            />
                        </div>

                        <div className='mt-4'>
                            <label className='text-white'>Nome:</label>
                            <SelectForm />
                        </div>

                        <div className='mt-4'>
                            <label className='text-white'>Nome:</label>
                            <SelectForm />
                        </div>

                        <div className='mt-4'>
                            <label className='text-white'>Nome:</label>
                            <SelectForm />
                        </div>

                        <div className='mt-4 flex items-center justify-center'>
                            <Button color="primary" className='bg-violet-600 hover:bg-violet-500' onClick={fetchData}>
                                Enviar
                            </Button>
                        </div>
                    </div>

                    <div className='bg-slate-50 shadow-2xl border-2 border-violet-800 w-11/12 rounded-tr-md rounded-br-md overflow-y-auto overflow-x-hidden' style={{ maxHeight: '580px' }}>
                        {data && (
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
