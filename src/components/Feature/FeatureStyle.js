import styled from 'styled-components'
import imgFeat from '../../images/featured3.jpg'

export const FeatureContainer = styled.div`
    background: linear-gradient(to right , rgba( 0 , 0 , 0 , .7 ) , rgba( 0 , 0 , 0 , .1 ) ) , url(${imgFeat});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    flex-direction: column;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem , 5vw , 5rem); 
    }
    p {
        font-size: clamp(1rem , 3vw , 2rem); 
        margin-bottom: 1rem;
    }

`
export const FeatureButton = styled.button`
    color: #000;
    background: #ffc500;
    border: none;
    padding: .6rem 3rem;
    font-size: 1.4rem;
    transition: .3s ease-in-out;

    &:hover {
        color: #fff;
        background: #e31837;
        transition: .3s ease-in-out;
        cursor: pointer;
    }
`