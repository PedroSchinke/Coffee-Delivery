import styled from 'styled-components'

export const BannerContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 160px;
    gap: 20px;

    @media (max-width: 768px) {
        padding: 0 30px;
        gap: 0;
    }

    .title-list {
        display: flex;
        flex-direction: column;
        gap: 60px;

        @media (max-width: 768px) {
            width: 55%;
            gap: 20px;
        }
    }

    img {
        width: 420px;

        @media (max-width: 768px) {
            width: 200px;
            margin-bottom: 200px;
        }
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-family: 'Baloo 2', cursive;
        color: ${props => props.theme['base-title']};
        font-size: 3rem;
        font-weight: 500;
        line-height: 1.2;

        @media (max-width: 768px) {
            font-size: 1.8rem;
        }
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.2rem;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }
    }
`

const BaseList = styled.ul`
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`

export const ListContainer = styled(BaseList)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    row-gap: 18px;

    @media (max-width: 768px) {
        width: 190%;
        column-gap: 5px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .item1 {
        color: ${props => props.theme['background']};
        background: ${props => props.theme['yellow-dark']};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        padding: 5px;
    }

    .item2 {
        color: ${props => props.theme['background']};
        background: ${props => props.theme['yellow']};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        padding: 5px;
    }

    .item3 {
        color: ${props => props.theme['background']};
        background: ${props => props.theme['base-text']};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        padding: 5px;
    }

    .item4 {
        color: ${props => props.theme['background']};
        background: ${props => props.theme['purple']};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        padding: 5px;
    }
`