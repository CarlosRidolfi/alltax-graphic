import React from 'react'
import dynamic from 'next/dynamic'
import { GraphicWrapper, VendasTitle } from './style'
import ProductImage from '../productImage'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Graphic({vendas, product}) {
    const options = {
        xaxis: {
            categories: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        },
        tooltip: {
            enabled: true
        },
        responsive: [{
            breakpoint: 800,
            options: {
                chart : {
                    width: "400px",
                },
                plotOptions: {
                bar: {
                    horizontal: true
                }
                }
            }
        }]
    }
    
    return (
        <>
            { vendas.length > 2 &&
                <GraphicWrapper>
                    <VendasTitle>Vendas por mês</VendasTitle>
                    <ProductImage product={product}/>
                    {(typeof window !== 'undefined') &&
                        <Chart
                            options={options}
                            series={[{data: vendas}]}
                            type="bar"
                            height={500}
                            width={800}
                        />
                    }
                    <i>Feito por Carlos Ridolfi</i>
                </GraphicWrapper>
            }
        </>
    )
}
