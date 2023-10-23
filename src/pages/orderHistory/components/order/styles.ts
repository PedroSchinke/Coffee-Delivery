import styled from 'styled-components'

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .date {
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['base-title']};
        margin-left: 10px;
    }
`

export const OrderInfos = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${props => props.theme['base-card']};
    padding: 20px 20px;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-subtitle']};

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`

export const OrderItensContainer = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 180px;
    display: flex;

    @media (max-width: 768px) {
        height: fit-content;
        min-height: 0;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        list-style: none;
        line-height: 1.6rem;
        margin-bottom: 20px;
    }
`

export const ShippingRate = styled.div`
    display: flex;
    justify-content: space-between;

    .shippingRateTitle {
        margin-left: 8px;
    }
`

export const OrderListItem = styled.li`
    display: flex;
    justify-content: space-between;
    gap: 7px;

    .img_title {
        display: flex;
        align-items: center;
        gap: 7px;

        span {
            line-height: 1.2;
        }
    } 

    img {
        width: 25px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme['base-hover']};
    margin-bottom: 20px;
`

export const PaymentInfosContainer = styled.div `
    display: flex;

    .dollarIcon {
        color: ${props => props.theme['purple-dark']};
        margin-right: 3px;
    }

    .paymentPreference_price {
        display: flex;
        flex-direction: column;

        .orderPrice {
        font-size: 1.3rem;
        }
    }
`