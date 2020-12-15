import styled from 'styled-components'
import imgBg from '../../images/pizza-3.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right , rgba( 0 , 0 , 0 , .7 ) , rgba( 0 , 0 , 0 , .1 ) ) , url(${imgBg});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
`
export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    padding: 0rem calc( (100vw - 1300px) /2 );
`
export const HeroItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-transform: uppercase;
    color: #fff;
    height: 100vh;
    max-height: 100%;
    width: 650px;
    padding: 0 2rem;
    font-weight: bold;
    line-height: 1;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`
export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem , 10vw , 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`
export const HeroP = styled.div`
    font-size: clamp(2rem , 2.5vw , 3rem);
    margin-bottom: 2rem;
`
export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    color: #fff;
    border: none;
    background: #e31837;
    transition: .3s ease-in-out;

    &:hover {
        transition: .3s ease-in-out;
        background: #ffc500;
        color: #000;
        cursor: pointer;
    }
`