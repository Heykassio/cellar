import styled from 'styled-components';
import { colorBackgroundLight, colorBackground } from '../../configs/colors';


export const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${colorBackground};
    padding: 24px;
    display: grid;
    grid-template-rows: 1fr 9fr;
    gap: 8px;
`;

export const Contentwrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    gap: 8px;
`;

export const Contentcards = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    background-color: ${colorBackground};
    border-radius: 8px;
`;
export const Navigation = styled.div`
    width: 20vw;
    max-width: 200px;
    height: 100%;
    display: grid;
    grid-template-rows: 8fr 1fr;
    gap: 16px;
    padding: 16px 24px;
    background-color: ${colorBackgroundLight};
    border-radius: 8px;
`;