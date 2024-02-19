"use client"

import React, { useState } from 'react';
import { Button, Input } from '@mui/joy';
import SelectForm from '../Select/select';
import { schema } from '@/utils/validationSchemas';
import { Toaster, toast } from 'sonner';

interface FieldValidationErrors {
    [key: string]: string[] | undefined;
}

export interface FormValidationErrors {
    fieldErrors: FieldValidationErrors;
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function Form() {
    const [data, setData] = useState<Todo[]>([]);
    const [editedName, setEditedName] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedEthnicity, setSelectedEthnicity] = useState('');
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('');
    const [validationErrors, setValidationErrors] = useState<FormValidationErrors>({ fieldErrors: {} });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(event.target.value);
        clearValidationError('name');
    };

    const handleGenderChange = (selectedOption: string) => {
        setSelectedGender(selectedOption);
        clearValidationError('gender');
    };

    const handleEthnicityChange = (selectedOption: string) => {
        setSelectedEthnicity(selectedOption);
        clearValidationError('ethnicity');
    };

    const handleMaritalStatusChange = (selectedOption: string) => {
        setSelectedMaritalStatus(selectedOption);
        clearValidationError('maritalStatus');
    };

    const fetchData = () => {
        const formData = {
            name: editedName,
            gender: selectedGender,
            ethnicity: selectedEthnicity,
            maritalStatus: selectedMaritalStatus,
        };

        const validationResult = schema.safeParse(formData);

        if (!validationResult.success) {
            toast.error('Preencha todos os seus dados corretamente antes de prosseguir');
            const errors: FormValidationErrors = {
                fieldErrors: validationResult.error.flatten().fieldErrors
            };
            setValidationErrors(errors);
            return;
        }

        setValidationErrors({ fieldErrors: {} });

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));

        console.log("Nome digitado: ", editedName);
        console.log('Gênero selecionado:', selectedGender);
        console.log('Etnia selecionada:', selectedEthnicity);
        console.log('Estado civil selecionado:', selectedMaritalStatus);
    };

    const clearValidationError = (fieldName: string) => {
        setValidationErrors(prevErrors => ({
            ...prevErrors,
            fieldErrors: {
                ...prevErrors.fieldErrors,
                [fieldName]: undefined
            }
        }));
    };

    return (
        <div className="mt-96 max-lg:mt-14 w-full mb-24 flex justify-center items-center" id='formulario'>
            <div className="w-full max-w-7xl">
                <div className='flex flex-row max-md:flex-col'>
                    <div className="w-3/6 max-md:w-full bg-violet-900 shadow-2xl border border-violet-900 p-20 max-md:p-10 max-md:pt-20 rounded-tl-3xl rounded-bl-3xl max-md:rounded-bl-none max-md:rounded-tr-3xl" style={{ maxHeight: '580px' }}>
                        <h1 className='text-white text-xl pb-6 font-bold -mt-12'>Preencha os dados corretamente</h1>
                        <div className=''>
                            <label className='text-white'>Nome:</label>
                            <Input
                                disabled={false}
                                size="lg"
                                variant="outlined"
                                className="w-full lg:w-80"
                                value={editedName}
                                onChange={handleNameChange}
                            />
                            {validationErrors.fieldErrors.name && (
                                validationErrors.fieldErrors.name.map((error, index) => (
                                    <div key={index} className="text-red-500">
                                        <p>{error}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className='mt-4'>
                            <label className='text-white'>Gênero:</label>
                            <SelectForm options={['Feminino', 'Masculino', 'Neutro', 'Não-binário', 'Agênero', 'Gênero fluído', 'Transgênero']} onChange={handleGenderChange} />
                            {validationErrors.fieldErrors.gender && (
                                validationErrors.fieldErrors.gender.map((error, index) => (
                                    <div key={index} className="text-red-500">
                                        <p>{error}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className='mt-4'>
                            <label className='text-white'>Etnia:</label>
                            <SelectForm options={['Branco(a)', 'Negro(a)', 'Amarela', 'Indígena', 'Pardo(a)']} onChange={handleEthnicityChange} />
                            {validationErrors.fieldErrors.ethnicity && (
                                validationErrors.fieldErrors.ethnicity.map((error, index) => (
                                    <div key={index} className="text-red-500">
                                        <p>{error}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className='mt-4'>
                            <label className='text-white'>Estado Civil:</label>
                            <SelectForm options={['Solteiro(a)', 'Casado(a)', 'União estável', 'Divorciado(a)', 'Viúvo(a)', 'Separado(a) judicialmente']} onChange={handleMaritalStatusChange} />
                            {validationErrors.fieldErrors.maritalStatus && (
                                validationErrors.fieldErrors.maritalStatus.map((error, index) => (
                                    <div key={index} className="text-red-500">
                                        <p>{error}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className='mt-4 flex items-center justify-center'>
                            <Button color="primary" className='bg-violet-600 hover:bg-violet-500' onClick={fetchData}>
                                Enviar
                            </Button>
                        </div>
                    </div>

                    <div className='bg-slate-100 shadow-2xl border-2 border-violet-800 w-11/12 max-md:w-full rounded-tr-md rounded-br-md max-md:rounded-tr-none overflow-y-auto overflow-x-hidden' style={{ maxHeight: '580px' }}>
                        {data?.map((item, index) => (
                            <div key={index} className="py-6 pl-12 mb-4 rounded-lg border-b border-gray-200 backdrop-blur-md transform transition duration-300 hover:scale-105 hover:bg-violet-100">
                                <p className="text-slate-600"><span className='font-bold text-violet-900 text-md'>UserID: </span>{item?.id}</p>
                                <p className="text-slate-600"><span className='font-bold text-violet-900 text-md'>Title: </span>{item?.title}</p>
                                <p className="text-slate-600"><span className='font-bold text-violet-900 text-md'>Completed: </span>{item?.completed ? <span className="text-green-500">Yes</span> : <span className="text-red-500">No</span>}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Toaster richColors position="top-center" />
        </div>
    );
}
