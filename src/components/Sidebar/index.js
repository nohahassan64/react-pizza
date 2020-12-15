import React from 'react'
import { 
     SidebarContainer,
     Icon,
     IconClose,
     SidebarMenu,
     SidebarLink,
     SideBtnWrap,
     SidebarButton
    } from './SidebarStyle'
const Sidebar = ({ isOpen , toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <IconClose />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarButton to="/">Order Now</SidebarButton>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
