import styled from 'styled-components'

export const SuccessContainer = styled.div`
    width: 100%;
    padding: 0 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;

    @media (max-width:768px) {
        padding: 0 30px;
    }

    .succesInfosContainer {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .title_subtitle {
        h1 {
            font-family: 'Baloo 2', cursive;
            color: ${props => props.theme['yellow-dark']};
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 1.1rem;
            color: ${props => props.theme['base-text']};
        }
    }

    .successImg {
        @media (max-width: 768px) {
            display: none;
            visibility: hidden;
        }
    }
`

export const DeliveryInfos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;
    border: 0;
    background: ${props => props.theme['base-card']};
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;

    .addressInfos {
        display: flex;
        align-items: center;
        gap: 10px;

        .mappin {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            color: ${props => props.theme['white']};
            background: ${props => props.theme['purple-dark']};
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            font-family: 'Roboto', sans-serif;
            font-size: 0.9rem;
            color: ${props => props.theme['base-text']};
        }
    }

    .timeInfos {
        display: flex;
        align-items: center;
        gap: 10px;

        .timer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            color: ${props => props.theme['white']};
            background: ${props => props.theme['yellow']};
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            font-family: 'Roboto', sans-serif;
            font-size: 0.9rem;
            color: ${props => props.theme['base-text']};
        }
    }

    .paymentInfos {
        display: flex;
        align-items: center;
        gap: 10px;

        .dollar {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            color: ${props => props.theme['white']};
            background: ${props => props.theme['yellow-dark']};
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            font-family: 'Roboto', sans-serif;
            font-size: 0.9rem;
            color: ${props => props.theme['base-text']};
        }
    }
`