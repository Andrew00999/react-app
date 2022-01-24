import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    text-align: center;
    color: red;
` 


const ErrorPage = () => {
    return (
        <Title> Неправильный путь, попробуйте снова... </Title>
    )
}

export default ErrorPage;