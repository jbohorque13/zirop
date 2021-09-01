import { createGlobalStyle } from "styled-components";
import LatoRegular from '../fonts/Lato-Regular.ttf';

export const colorGlobal = {
    yellow: '#f8df4f',
    darkBlue: '#373948',
}

export const GlobalStyle = createGlobalStyle`
    :root{
        --site-max-width: 1200px
    }
    @font-face {
        font-family: "Lato Regular";
        src: local("Lato Regular"), local("LatoRegular"),
        url(${LatoRegular}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    body {
        font-family: "Nunito Regular", Arial, Helvetica, sans-serif;
        background-color: ${props => (props.theme === "purple" ? "white" : "white")};
        margin: 0;
    }
    h1 {
        color: '#000';
    }
    p {
        color: '#000';
    }
`