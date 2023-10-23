import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['background']};
    }

    body {
        background: ${(props) => props.theme['background']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
    }
`