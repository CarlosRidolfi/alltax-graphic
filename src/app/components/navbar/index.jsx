import React from 'react'
import Typewriter from 'typewriter-effect';
import { NavbarWrapper, Title, Linha } from './style';

export default function Navbar() {
    return (
        <NavbarWrapper>
                <Title>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('All Tax Graphic (Teste)')
                    .pauseFor(1000)
                    .start();
                }}
                />
            </Title>
            <Linha />
        </NavbarWrapper>
    )
}
