import styled from "styled-components";

export const InstructionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: center;

    i {
        color: white;
        font-size: 20px;
        margin-top: 20px;
    }
`

export const SelectWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    column-gap: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
    font-family: 'IBM Plex Mono', monospace;
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
`

export const PersonalizedSelect = styled.select`
    width: 150px;
    height: 30px;
    border: 1px solid white;
    border-radius: 10px;
`

export const SelectTitle = styled.h3`
    font-size: 16px;
`