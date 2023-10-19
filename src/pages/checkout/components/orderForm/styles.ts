import styled from 'styled-components'

export const OrderContainer = styled.div`
    width: 120%;
    display: flex;
    gap: 15px;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
    
    .infoLabel {
        font-family: 'Baloo 2', cursive;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.7rem;
    }
`

export const OrderForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 30px;
    background: ${props => props.theme['base-card']};
    border-radius: 15px;

    label {
        display: flex;
        align-items: flex-start;
        gap: 10px;

        .mapPinIcon {
            color: ${props => props.theme['yellow-dark']};
        }

        .adressLabel {
            display: flex;
            flex-direction: column;
            gap: 5px;

            h2 {
                font-family: 'Roboto', sans-serif;
                font-size: 1.1rem;
                font-weight: normal;
                color: ${props => props.theme['base-subtitle']};
            }

            span {
                font-family: 'Roboto', sans-serif;
                font-size: 0.9rem;
                color: ${props => props.theme['base-text']};
            }
        }
    }

    .adressForm {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .CEP_Rua {
                display: flex;
                gap: 10px;
                justify-content: space-between;

                .CEP {
                    display: flex;
                    flex-direction: column;
                    width: 30%;

                    .CEP_input {
                        display: flex;
                        width: 100%;
                    }
                }

                .Rua {
                    display: flex;
                    flex-direction: column;
                    width: 70%;

                    .Rua_input {
                        display: flex;
                        width: 100%;
                    }
                }
            }

            .Número_Complemento_Bairro {
                display: flex;
                gap: 10px;
                justify-content: space-between;

                .Número {
                    display: flex;
                    flex-direction: column;
                    width: 25%;

                    .Número_input {
                        display: flex;
                        width: 100%;
                    }
                }

                .Complemento_input {
                    display: flex;
                    width: 35%;
                }

                .Bairro_input {
                    display: flex;
                    width: 35%;
                }
                
            }

            .Cidade_UF {
                display: flex;
                gap: 10px;
                justify-content: space-between;

                .Cidade_input {
                    display: flex;
                    width: 70%;
                }

                .UF_input {
                    display: flex;
                    width: 30%;
                }
            }
        }
    }

    input {
        height: 2.5rem;
        padding: 10px;
        border: 1px solid ${props => props.theme['base-hover']};
        border-radius: 8px;
        background: ${props => props.theme['base-button']};
        color: ${props => props.theme['base-subtitle']};

        &::placeholder {
            font-family: 'Roboto', sans-serif;
            color: ${props => props.theme['base-label']};
        }
    }
`

export const ErrorMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    color: red;
    font-size: 0.8rem;
    margin-top: 3px;
    margin-left: 3px;
`

export const PaymentForm = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

    label {
        display: flex;
        align-items: flex-start;
        gap: 10px;

        .dollarSign {
            color: ${props => props.theme['purple-dark']};
        }

        .paymentLabel {
            display: flex;
            flex-direction: column;
            gap: 5px;

            h2 {
                font-family: 'Roboto', sans-serif;
                font-size: 1.1rem;
                font-weight: normal;
                color: ${props => props.theme['base-subtitle']};
            }

            span {
                font-family: 'Roboto', sans-serif;
                font-size: 0.9rem;
                color: ${props => props.theme['base-text']};
            }
        }
    }

    .paymentButtonsContainer {
        width: 100%;
        display: flex;
        gap: 10px;

        @media (max-width:768px) {
            flex-direction: column;
        }
    }
`

export const PaymentButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    padding: 15px 5px; 
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        border: 1px solid ${props => props.theme['purple-dark']};
    }

    &:focus {
        background: ${props => props.theme['purple-light']};
        border: 1px solid ${props => props.theme['purple-dark']};
        box-sizing: border-box;
    }

    .paymentButtonIcon {
        display: flex;
        align-items: center;
        color: ${props => props.theme['purple-dark']};
    }
`

export const ConfirmOrderButton = styled.button`
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 8px;
    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
    }
`