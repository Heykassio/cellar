import styled from 'styled-components';

export const LoginForm = styled.div`
    width: 100%;
    background-color: #020606;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 16px;

    h2 {
        margin-top: 10vh; //7
        font-size: 60px;
        color: white;

        @media(max-width: 1700px) {
            margin-top: 7vh;
        }
        span {
            color: #DB8BD7;
        }
    }

    span.sub {
        color: rgba(255,255,255, 0.6);
    }

    form {
        width: 70%;
        margin: 0 auto;

        div.inputs {
            display: flex;
            flex-direction: column;
            margin-top: 16px;

            label {
                padding: 8px 0;
            }

            input {
                padding: 8px 16px;
                background-color: inherit;
                border: 1px solid white;
                font-size: 18px;
                border-radius: 8px;
            }
        }

        button {
            width: 100%;
            background-color: #DB8BD7;
            border: none;
            font-size: 18px;
            padding: 8px 0;
            margin-top: 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: 400ms;

            &:hover{
                background-color: #b56bb1; 
            }
        }
    }

    .help {
        display: flex;
        flex-direction: column;
        margin-top: 40vh; //32

        @media(max-width: 1700px) {
            margin-top: 32vh;
        }
    }


`;