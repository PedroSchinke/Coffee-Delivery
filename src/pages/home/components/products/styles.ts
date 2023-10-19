import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 100%;
    padding: 0 160px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    .productsLabel {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-family: 'Baloo 2', cursive;
            font-size: 1.6rem;
            color: ${props => props.theme['base-title']};
        }
    }
`

export const ButtonAndShoppingCartContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 70px;
    gap: 20px;

    a {
        text-decoration: none;
        width: 25%;
        display: flex;
        justify-content: flex-end;

        @media (max-width: 768px) {
            width: 50%;
        }
    }

    .shoppingcart {
        width: 20%;
        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 8px 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 1.1rem;

        @media (max-width: 768px) {
            width: 50%;
            font-size: 0.9rem;
        }
    }

    .goToCartButton {
        width: 100%;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 1.1rem;
        font-weight: bolder;
        background: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['white']};
        border: 0;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            background: ${props => props.theme['yellow-light']};
            color: ${props => props.theme['yellow-dark']};
        }
    }
`