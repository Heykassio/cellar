import React from 'react';
import { Art } from './styled';

import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai';

export default function ArtDiv () {
    return (
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
    );
}
