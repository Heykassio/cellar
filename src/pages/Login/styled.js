import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 0.65fr;
    height: 100%;

    @media(max-width: 900px){
        display: flex;
    }
`;
