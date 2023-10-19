import styled from 'styled-components'

export const NoOrdersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        color: ${props => props.theme['base-subtitle']};
        margin-top: 40px;

        .notepadIcon {
            margin-bottom: 4px;
        }
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1rem;
        color: ${props => props.theme['base-text']};
    }
`