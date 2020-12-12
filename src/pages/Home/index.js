import React from 'react';
// import React, { useState, useEffect } from 'react';

import { Main, Navigation, Contentwrapper, Contentcards } from './styled';
import Topbar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import Footerbar from '../../components/Footerbar';

export default function Home() {

    // const [vendas, setVendas] = useState(null);

    // useEffect(() => {
    //     async function getdata() {
    //         const request = await fetch('https://api-arca.heykassio.com/venda/oneday/2020-11-26', {
    //             credentials: 'include',
    //             method: 'GET',
    //         });

    //         const data = await request.json();
    //         setVendas(data.vendas);

    //     }

    //     getdata();
    // });

    return (
        <Main>
            <Topbar />
            <Contentwrapper>
                <Navigation>
                    <SideBar />
                    <Footerbar />
                </Navigation>
                <Contentcards>
                    
                </Contentcards>
            </Contentwrapper>
        </Main>
    );
};
