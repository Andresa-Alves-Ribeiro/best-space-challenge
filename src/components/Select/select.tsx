import React from 'react';

type OptionType = {
    options: string[];
    onChange: (selectedOption: string) => void;
}

export default function SelectForm({ options, onChange }: OptionType) {
    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedOption = event.target.value as string;
        onChange(selectedOption);
    };

    return (
        <div className="mt-2">
            <select onChange={handleSelectChange} className='h-10 w-full lg:w-80 rounded-md'>
                <option value="">Selecione</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};
