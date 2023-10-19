import styled from 'styled-components'

export const CartItemContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .image_title {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .cartItemImage {
        width: 80px;
    }

    .title_button {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .cartItemTitle {
            font-family: 'Roboto', sans-serif;
            font-size: 1.3rem;
            color: ${props => props.theme['base-text']};
        }

        .add_remove_buttons {
            display: flex;
            gap: 7px;

            .removeButton {
                display: flex;
                align-items: center;
                font-family: 'Roboto', sans-serif;
                font-size: 0.8rem;
                font-weight: bold;
                color: ${props => props.theme['base-text']};
                border: 0;
                border-radius: 8px;
                background: ${props => props.theme['base-button']};
                padding: 5px 10px;
                cursor: pointer;

                &:hover {
                    background: ${props => props.theme['base-hover']};
                }

                .trashIcon {
                    color: ${props => props.theme['purple-dark']};
                    margin-bottom: 0px;
                }
            }
        }
    }

    .price {
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        font-weight: bold;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const Line = styled.div`
    background: ${props => props .theme['base-button']};
    height: 2px;
`