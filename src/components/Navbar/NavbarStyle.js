import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.div`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`
export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`
export const NavIcon = styled.div`
    color: #fff;
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    p {
        transform: translate(-175% , 100%);
        font-weight: bold;
    }
`
export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50% , -15%)
`