import styled, { createGlobalStyle } from 'styled-components';
import { colorBackground, colorBackgroundLight } from '../configs/colors';
export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        color: white;
    }
    html, body, #root {
        height: 100vh;
        overflow: hidden;
    }

    body {
        background-color: ${colorBackgroundLight};
    }

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }

    h2 {
        color: black;
    }
`;

export const Container= styled.section`
    /* max-width: 1280px; */
    background-color: ${colorBackground};
    margin: 0 auto;
    height: 100%
`;