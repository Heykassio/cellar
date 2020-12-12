import styled from 'styled-components';
import { colorBackground, colorBackgroundLight} from '../../configs/colors';

export const Topbar = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${colorBackgroundLight};
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const Topweather = styled.div`
    font-size: 0.9em;
    font-weight: 300;
    margin-left: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 16px 0;

    span.temp {
        margin-left: 8px;
        display: inline-flex;
        align-items: center;

        .tempSimbol{
            margin-left: 4px;
            font-size: 20px;
            fill: yellow;
        }
    }
`;