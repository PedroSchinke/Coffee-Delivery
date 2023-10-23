import styled from 'styled-components'

export const ProductsList = styled.nav`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    row-gap: 40px;
    column-gap: 30px;
    justify-content: space-between;

    @media (max-width: 768px){
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        column-gap: 10px;
    }

    section {
        height: 310px;
        background: ${props => props.theme['base-card']};
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        display: grid;
        grid-template-rows: 25% 5% 20% 20% 25%;
        justify-content: space-evenly;
        align-items: center;
        justify-items: center;
        padding: 0 10px;

        img {
            width: 100px;
            margin-top: -40px;
        }

        span {
            font-family: 'Roboto', sans-serif;
            color: ${props => props.theme['yellow-dark']};
            font-size: 0.7rem;
            font-weight: 600;
            background: ${props => props.theme['yellow-light']};
            padding: 0.25rem 0.35rem;
            border-radius: 10px;
        }
    }
`

export const ProductName = styled.h2`
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.3rem;
    text-align: center;
    line-height: 1;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

export const Descrition = styled.h3`
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
    font-weight: 500;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`

export const BarContainer = styled.div`
    width: 90%;
    display: flex;
    gap: 20px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;

    @media (max-width: 768px) {
        gap: 5px;
    }

    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`

export const Price = styled.h3`
    font-family: 'Baloo 2', cursive;
    font-size: 1.6rem;
    color: ${props => props.theme['base-subtitle']};

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`

export const AddToCartButton = styled.button`
    width: 3.6rem;
    height: 2.5rem;
    background: ${props => props.theme['purple-dark']};
    border: 0;
    color: ${props => props.theme['base-card']};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;

    @media (max-width: 768px) {
        width: 3.3rem;
        height: 2.3rem;
    }

    &:hover {
        background: ${props => props.theme['purple']};
    }
`