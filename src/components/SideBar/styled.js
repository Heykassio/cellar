import styled from 'styled-components';
import { colorHover } from '../../configs/colors';

export const Sidebar = styled.nav`
    height: 100%;
    margin-top: 40px;
`;

export const MenuItem = styled.div`
    padding: 16px 8px;
    margin-bottom: 24px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;

    &:hover {
        color: ${colorHover};
        background-color: #0b3541;
    }
`;