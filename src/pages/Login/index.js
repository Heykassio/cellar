import React from 'react'

import Form from '../../components/LoginForm';
import Art from '../../components/Art';
import { Container } from '../../styles/GlobalStyles'
import { MainContainer } from './styled';

export default function Login() {
    return (
        <Container>
            <MainContainer>
                <Art />                
                <Form />
            </MainContainer>
        </Container>
    );
}