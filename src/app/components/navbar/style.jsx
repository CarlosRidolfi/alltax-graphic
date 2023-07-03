import { styled } from 'styled-components'

export const NavbarWrapper = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 30px;
    font-family: 'IBM Plex Mono', monospace;
`
export const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size: 30px;
    }
`

export const Linha = styled.div`
    position: absolute;
    margin-top: 100px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: lightgray;
`
