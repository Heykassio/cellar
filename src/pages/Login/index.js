import React from 'react'

// import { FaGithub} from 'react-icons/fa'
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai';
import { Container } from '../../styles/GlobalStyles'
import { Art, LoginForm, MainContainer } from './styled';

export default function Login() {
    return (
        <Container>
            <MainContainer>
                <Art imgUrl={process.env.PUBLIC_URL + '/img/backgroundlogindis.jpg'}>
                    <div className="text">
                        <h3>Bem-vindo de volta!</h3>
                        <p>Tenha controle total de suas vendas com a ajuda de nosso sistema e assim aumente o desempenho de sua empresa.</p>
                    </div>
                    <div className="contact">
                        <div className="icons">
                            <a href="https://github.com/heykassio"> <AiOutlineGithub size={18} /> </a>
                            <a href="https://github.com/heykassio"> <AiOutlineMail size={18} /> </a>
                            <a href="https://github.com/heykassio"> <AiOutlineWhatsApp size={18} /> </a>
                        </div>

                        <div className="created">
                            
                        </div>
                    </div>
                </Art>
                <LoginForm>
                    <h2>Cell<span>ar</span></h2>
                    <span className="sub">Faça Login usando suas credenciais</span>
                    <form action="">
                        <div className="inputs">
                            <label htmlFor="user">Usuário</label>
                            <input type="text" name="user" />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="help">
                        <span className="sub">Precisa de ajuda?</span>
                        <a href="/">Entre em contato</a>
                    </div>
                </LoginForm>
            </MainContainer>
        </Container>
    )
}