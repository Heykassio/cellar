import React from 'react';
import { TiWeatherSunny } from 'react-icons/all';
import { Topbar, Topweather } from './styled';
import Header from '../Header';

export default function TopBar() {
    return (
        <Topbar>
            <Header/>
            <Topweather>
                <span>Bom dia Doris.</span>
                <span>Domingo, 13 de dezembro de 2020. <span className="temp">24°C <TiWeatherSunny className="tempSimbol"/></span></span>
            </Topweather>
        </Topbar>
    );
}