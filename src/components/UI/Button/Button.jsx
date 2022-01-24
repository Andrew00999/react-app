import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    padding: .3rem 1rem;
    border: 1px solid teal;
    background: transparent;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: .1s;
        :active{
            transform: scale(.95);
        }
`

const Button = ({ children, ...props }) => {
    return (
        <StyledBtn {...props}>
            {children}
        </StyledBtn>
    )
}

export default Button;