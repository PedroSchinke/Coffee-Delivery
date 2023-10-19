import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 0 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;

    img {
        width: 100px;
    }
`

export const FooterInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        color: ${props => props.theme['base-text']};
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            width: 50px;

            &:hover {
                color: ${props => props.theme['purple']};
            }
        }
    }
`