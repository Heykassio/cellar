import styled, { createGlobalStyle } from 'styled-components';
import { colorBackground } from '../configs/colors';
export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        color: white;
    }
    body, #root {
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
`;

export const Container= styled.section`
    max-width: 1280px;
    background-color: ${colorBackground};
    margin: 0 auto;
    height: 100%
`;