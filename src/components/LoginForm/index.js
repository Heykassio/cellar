import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { baseUrl } from '../../../config';
import { LoginForm } from './styled';



export default function Form() {

    const [red, setRed] = useState(false);

    function redirect() {
        if(red) {
            return <Redirect to="/"/>;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const user = e.target.querySelector('#user').value;
        const password = e.target.querySelector('#password').value;

        try {
            const response = await fetch(`${baseUrl}/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({login: user, password})
        });

        if(response.status === 401){
            const div = document.createElement('div');
            div.innerHTML = 'User ou senha inválidos.';
            e.target.appendChild(div);
        }

        console.log(response);

        if(response.status === 200) {
            setRed(true);
        }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <LoginForm>
            <h2>Cell<span>ar</span></h2>
            <span className="sub">Faça Login usando suas credenciais</span>
            <form action="" onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="user">Usuário</label>
                    <input type="text" name="user" id="user"/>
                </div>
                <div className="inputs">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="help">
                <span className="sub">Precisa de ajuda?</span>
                <a href="/">Entre em contato</a>
            </div>
            <div>
                {redirect()}
            </div>
        </LoginForm>
    );
}