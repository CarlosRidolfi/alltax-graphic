import React from 'react'
import Chart from 'react-apexcharts'
import { GraphicWrapper, VendasTitle } from './style'
import ProductImage from '../productImage'

export default function Graphic({vendas, product}) {
    const options = {
        xaxis: {
            categories: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        },
        tooltip: {
            enabled: true
        },
    }
    return (
        <>
            { vendas.length > 2 &&
                <GraphicWrapper>
                    <VendasTitle>Vendas por mês</VendasTitle>
                    <ProductImage product={product}/>
                    <Chart
                        options={options}
                        series={[{data: vendas}]}
                        type="bar"
                        height={500}
                        width={800}
                    />
                    <i>Feito por Carlos Ridolfi</i>
                </GraphicWrapper>
            }
        </>
    )
}
