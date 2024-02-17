import React from 'react';
import { Option, Select } from '@mui/joy';


export default function SelectForm() {
    return (
        <div className="mt-2">
            <Select placeholder="Selecione" defaultValue={""}>
                <Option value="dog">Dog</Option>
                <Option value="cat">Cat</Option>
            </Select>
        </div>
    );
};