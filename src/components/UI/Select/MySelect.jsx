

import React from 'react';
import styled from 'styled-components';


const CustomSelect = styled.select`
    outline: 0;
    width: 100%;
    padding: .3rem 0;
    margin-bottom: 1rem;
`



const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <CustomSelect
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </CustomSelect>
    )
}

export default MySelect;