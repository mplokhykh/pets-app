import React from "react";
import './Select.scss'


export function Select ({value, label, onChange, list}) {
    return (
        <label className='label text'>
            {!!label && label}
            <select value={value} onChange={e => onChange(e.target.value)} className='text'>
                <option selected disabled> Select </option>
                {list.map((option, index) => {
                    return <option key={index}>{option.name}</option>
                })}
            </select>
        </label>
    )
}
