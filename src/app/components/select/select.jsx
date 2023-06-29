import React, { useCallback } from 'react'
import json from '../../json/products.json'
import { InstructionWrapper, PersonalizedSelect, SelectContainer, SelectTitle, SelectWrapper } from './style'
import Graphic from '../graphic/graphic';

export default function Select() {
    const [categorias, setCategorias] = React.useState([]);
    const [subCategorias, setSubCategorias] = React.useState([]);
    const [marcas, setMarcas] = React.useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState();
    const [subCategoriaSelecionada, setSubCategoriaSelecionada] = React.useState("Cruiser");
    const [marcaSelecionada, setMarcaSelecionada] = React.useState();
    const [vendas, setVendas] = React.useState([]);
    const [instruction, setInstruction] = React.useState("Selecione uma categoria");

    React.useEffect(() => {
        setIniciais(json.categorias)
    }, [])

    const setIniciais = (categoria) => {
        setCategorias(categoria)
        setCategoriaSelecionada(categoria[0])
        setSubCategorias(categoria[0].subcategorias)
        setSubCategoriaSelecionada(categoria[0].subcategorias[0])
        setMarcas(categoria[0].subcategorias[0].marcas)
        setMarcaSelecionada(categoria[0].subcategorias[0].marcas[0])
        setVendas(categoria[0].subcategorias[0].marcas[0].vendas)
    };

    const setSubcategoria = useCallback((subcategoria) => {
        setSubCategoriaSelecionada(subcategoria)
        setMarcas(subcategoria.marcas)
        setMarcaSelecionada(subcategoria.marcas[0])
        setVendas(subcategoria.marcas[0].vendas)
    }, []);

    const handleSelectCategorias = useCallback((event) => {
        const categoriaNome = event.target.value
        let categoriaSelecionada = categorias.find(categoria => categoria.nome === categoriaNome)
        setSubCategorias(categoriaSelecionada.subcategorias)
        setSubcategoria(categoriaSelecionada.subcategorias[0])
        setCategoriaSelecionada(categoriaSelecionada)
    }, [categorias]);

    const handleSelectSubcategorias = useCallback((event) => {
        const subcategoriaNome = event.target.value
        let subCategoriaSelecionada = categoriaSelecionada.subcategorias.find(subcategoria => subcategoria.nome === subcategoriaNome)
        setSubcategoria(subCategoriaSelecionada)
    }, [categoriaSelecionada]);

    const handleSelectMarcas = useCallback((event) => {
        const marcaNome = event.target.value
        let marcaSelecionada = subCategoriaSelecionada.marcas.find(marca => marca.nome === marcaNome)
        setMarcaSelecionada(marcaSelecionada)
        setVendas(marcaSelecionada.vendas)
    }, [subCategoriaSelecionada]);

    return (    
        <>
            <InstructionWrapper>
                {
                    marcaSelecionada ?
                        null
                        :
                        <i>{instruction}</i>
                }
                <SelectWrapper>
                    <SelectContainer>
                        <SelectTitle>Categoria:</SelectTitle>
                        <PersonalizedSelect value={categoriaSelecionada?.nome} onChange={handleSelectCategorias}>
                            {categorias.map((categoria) => (
                                <option key={categoria.nome} value={categoria.nome}>
                                    {categoria.nome}
                                </option>
                            ))}
                        </PersonalizedSelect>
                    </SelectContainer>
                    
                    <SelectContainer>
                        <SelectTitle>Subcategoria:</SelectTitle>
                        <PersonalizedSelect value={subCategoriaSelecionada?.nome} onChange={handleSelectSubcategorias}>
                            {subCategorias.map((subcategoria) => (
                                <option key={subcategoria.nome} value={subcategoria.nome}>
                                    {subcategoria.nome}
                                </option>
                            ))}
                        </PersonalizedSelect>
                    </SelectContainer>

                    <SelectContainer>
                        <SelectTitle>Marcas:</SelectTitle>
                        <PersonalizedSelect value={marcaSelecionada?.nome} onChange={handleSelectMarcas}>
                            {marcas.map((marca) => (
                                <option key={marca.nome} value={marca.nome}>
                                    {marca.nome}
                                </option>
                            ))}
                        </PersonalizedSelect>
                    </SelectContainer>
                </SelectWrapper>
            </InstructionWrapper>
            {(typeof window !== 'undefined') &&
                <Graphic vendas={vendas} product={categoriaSelecionada?.nome} />
            }
        </>
    );
};
