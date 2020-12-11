import React from 'react';
import { } from 'react-icons/all';
import {Sidebar, MenuItem}  from './styled';
export default function SideBar(){
    return (
        <Sidebar>
            <MenuItem>
                home
            </MenuItem>
            <MenuItem>
                vendas
            </MenuItem>
            <MenuItem>
                produtos
            </MenuItem>
            <MenuItem>
                despesas
            </MenuItem>
            <MenuItem>
                historico
            </MenuItem>
        </Sidebar>
    );
}
