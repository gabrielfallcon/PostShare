import styled from 'styled-components'
import img from '../assets/img/bannerGatinho.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: start;
    margin: 0;
    padding: 0;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 2%;
    background-image: url(${img});
    background-position: center;
    background-size: contain;

    @media (max-width: 575.98px) {
        width: 100%;
        height: 90vh;
        padding: 0;
        justify-content: space-between;
        background: none ;
    }
`

export const Title = styled.h1`
    width: 100%;
    height: 180px;
    background-color: #47b2b6;
    padding: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-family: 'Frijole', cursive;
    }
`;

export const Coment = styled.div`
    width: 80%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    color: #777;

    input{
        width: 50%; 
        padding: 20px;
        border-radius: 0;

        @media (max-width: 575.98px) {
            width: 95%;
        }
    }
`

export const Sharer = styled.div`
    width: 60%;
    min-height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a{
        width: 190px;
        padding: 9px;
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Roboto, sans-serif;
    }
    a:hover {
        color: white;
        text-decoration: none;
    }
    .waths {
        background-color: #25d366;
    }
    .face {
        background-color: #3b5998;
    }
    .twitter{
        background-color: #2aa9e0;
    }
    .border{
        width: 100%;
        display: none;
        border: 1px double black;

        @media (max-width: 575.98px) {
            display: block
        }
    }

    @media (max-width: 575.98px) {
        width: 100%;
        margin-bottom: -50px;
        min-height: 200px;
        justify-content: space-around;
        flex-direction: column;
    }
`





