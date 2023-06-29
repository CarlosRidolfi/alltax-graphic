import React from 'react'
import { styled } from 'styled-components'
import Image from 'next/image'


const ImageWrapper = styled.div`
  margin-top: 10px;
  img {
    border-radius: 5px;
  }
`

export default function ProductImage({product}) {
  return (
    <ImageWrapper>
      {
          product === "Carros" ?
            <Image
              src="/carro.png"
              width={150}
              height={100}
              alt="Produto"
            />
          : 
          product === "Motos" ?
            <Image
              src="/moto.png"
              width={150}
              height={100}
              alt="Produto"
            />
          :
          product === "Aviões" ?
            <Image
                src="/aviao.png"
                width={150}
                height={100}
                alt="Produto"
            />
          :
          null
      }
    </ImageWrapper>
  )
}
