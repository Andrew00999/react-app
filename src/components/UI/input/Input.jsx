import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    border: 1px solid teal;
    border-radius: 4px;
    margin: 5px 0;
    padding: .5rem 1rem;
    outline: 0;
    ::placeholder {
        color: #333;
    }
`


const Input = ({ holder, ...props }) => {
    return (
        <StyledInput type="text" placeholder={holder} {...props} />
    )
}

export default Input;