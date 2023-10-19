import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    width: 100%;
    padding: 0 160px;
    padding-bottom: 100px;
    display: flex;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 30px;
    }
`