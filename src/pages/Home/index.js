import React, { useState, useEffect } from 'react';

import { Main, Navigation } from './styled';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Footerbar from '../../components/Footerbar';

export default function Home() {

    const [vendas, setVendas] = useState(null);

    useEffect(() => {
        async function getdata() {
            const request = await fetch('https://api-arca.heykassio.com/venda/oneday/2020-11-26', {
                credentials: 'include',
                method: 'GET',
            });

            const data = await request.json();
            setVendas(data.vendas);
        }

        getdata();
    })

    return (
        <Main>
            <Navigation>
                <Header />
                <SideBar />
                <Footerbar />
            </Navigation>
        </Main>
    );
};
