import styled from 'styled-components'

export const CartContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width:768px) {
        margin-bottom: 60px;
    }

    .selectedCoffees {
        font-family: 'Baloo 2', cursive;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.7rem;
    }
`

export const CartSection = styled.section`
    background: ${props => props.theme['base-card']};
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const CartSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .totalItens {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        color: ${props => props.theme['base-subtitle']};
    }

    .delivery {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        color: ${props => props.theme['base-subtitle']};
    }

    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme['base-title']};
    }
`

export const BackButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
`

export const BackToProductsButton = styled.button`
    width: 60%;
    height: 35px;
    border: 0;
    border-radius: 8px;
    margin-top: 0px;
    background: transparent;
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`