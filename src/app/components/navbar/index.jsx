import React from 'react'
import Typewriter from 'typewriter-effect';
import { NavbarWrapper, Title, Linha } from './style';

export default function Navbar() {
    return (
        <NavbarWrapper>
                <Title>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('All Tax Graphic')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(1000)
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                    .start();
                }}
                />
            </Title>
            <Linha />
        </NavbarWrapper>
    )
}
