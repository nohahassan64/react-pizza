import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.aside`
    position: fixed;
    top: 0;
    right: ${({isOpen}) => isOpen ? '0' : '-1000px'};
    width: 350px;
    height: 100%;
    background: #ffc500;
    z-index: 999;
    display: grid;
    transition: .3s ease-in-out;
    align-items: center;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;;
    transition: .3s ease-in-out;
    background: transparent;
    border: transparent;
    outline: none;
    font-size: 2rem;
`
export const IconClose = styled(FaTimes)`
    color: #000;
`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3 , 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3 , 60px);
    }

`
export const SidebarLink = styled(Link)`
    text-decoration: none;
    color: #000;
    transition: .3s ease-in-out;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #e31837;
        transition: .3s ease-in-out;
    }
    
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarButton = styled(Link)`
    text-decoration: none;
    color: #fff;
    background: #e31837;
    font-size: 16px;
    padding: 16px 64px;
    white-space: nowrap;
    cursor: pointer;
    border: none;
    outline: none;
    transition: .3s ease-in-out;

    &:hover {
        transition: .3s ease-in-out;
        background: #fff;
        color: #010606;
    }
`