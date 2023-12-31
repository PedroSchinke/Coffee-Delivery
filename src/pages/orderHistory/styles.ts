import styled from 'styled-components'

export const OrderHistoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 160px;
    margin-bottom: 100px;

    @media (max-width:768px) {
        padding: 0 30px;
    }

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.7rem;
        color: ${props => props.theme['base-title']};
        margin-left: 10px;
        margin-bottom: 10px;
    }
`

export const OrdersSection = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, max-content));
    gap: 10px;
    row-gap: 30px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }
`