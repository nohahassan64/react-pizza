import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: #0d0909;
`
export const FooterWrap = styled.div`
    margin: 0 auto;
    padding: 16px 24px;
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 1rem auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column
    }

`
export const SocialLogo = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-self: start;
    align-items: center;
    cursor: pointer;;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`