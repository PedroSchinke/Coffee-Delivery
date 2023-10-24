import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 140px;
    background: ${props => props.theme['background']};
    padding: 0 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 0 30px;
    }

    .logo {
        width: 150px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .location {
            display: flex;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            font-size: 1.09rem;
            color: ${props => props.theme['purple-dark']};
            background: ${props => props.theme['purple-light']};
            border-radius: 8px;
            gap: 5px;
            padding: 8px 12px;

            @media (max-width: 768px) {
                display: none;
            }

            a {
                display: flex;
                align-items: center;
                color: ${props => props.theme['purple-dark']};
            }
        }
    }
`

export const HistoryButton = styled.span`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.09rem;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    border-radius: 8px;
    gap: 5px;
    padding: 8px 12px;
    transition: 0.3s;

    &:hover {
        color: white;
        background: ${props => props.theme['yellow-dark']};
    }

    .myOrdersSpan {
        @media (max-width: 1068px) {
            display: none;
        }
    }
`