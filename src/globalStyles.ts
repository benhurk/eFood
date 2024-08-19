import { createGlobalStyle } from "styled-components";

export const colors = {
    bgLight: '#FFF8F2',
    cream: '#FFEBD9',
    red: '#E66767'
}

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        list-style: none;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;

        @media (max-width: 1024px) {
            max-width: 90%;
        }
    }

    main {
        padding: 80px 0 120px 0;
        background-color: ${colors.bgLight};
    }
`

export default GlobalStyles;