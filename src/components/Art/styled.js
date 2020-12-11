import styled from 'styled-components';

export const Art = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imgUrl});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    /* justify-content: space-around; */

    div.text {
        margin-top: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    div.contact {
        width: 100%;
        margin-top: 50vh; //45
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px;

        @media(max-width: 1700px) {
            margin-top: 45vh;
        }

        .icons {
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 8px 8px;
            
            
            a {
                color: rgba(255, 255, 255, 0.5);
                display: flex;
                align-items: center;
                margin-right: 8px;
            }
        }
        
        span {
            font-weight: 300;
            margin-right: 8px;
            color: rgba(255, 255, 255, 0.5);
            font-size: 18px;
            align-self: center;
        }

        .created {
            padding: 8px;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 8px;
            display: flex;
            align-items: center;
            
            span {
                font-size: 14px;
                font-weight: bold;                
            }
        }
    }

    h3 {
        color: white;
        /* margin-top: 32px; */
        font-size: 32px;
        position: relative;
        padding: 8px 16px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.2px;
    }

    p {
        color: white;
        width: 500px;
        margin-top: 24px;
        text-align: center;
        font-size: 1.2em;
        padding: 8px 8px;
        background-color: rgba(0,0,0,0.4);
        border-radius: 8px;
    }


`;
