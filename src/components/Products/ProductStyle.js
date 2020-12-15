import styled from 'styled-components'

export const ProductContainer = styled.div`
    background: #150f0f;
    color: #fff;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
`
export const ProductHead = styled.h1`
    margin-bottom: 5rem;
    text-align: center;
    font-size: clamp(2rem , 2.5vw , 3rem); 
`
export const ProductWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const ProductCard = styled.div`
    width: 300px;
    line-height: 2;
    margin: 0 2rem;
`
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`
export const ProductInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
`
export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`
export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: .3s ease-in-out;

    &:hover {
        transition: .3s ease-in-out;
        background: #ffc500;
        cursor: pointer;
        color: #000;
    }

`