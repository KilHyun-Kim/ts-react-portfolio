import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle2 = createGlobalStyle`
    ${reset}
    *{
        margin:0;
        padding:0;
        
        box-sizing: border-box;
    }
    body{
        min-height:500vh;
        background-color: #ffffff;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer
    }
    input, button{
        background-color:transparent;
        border: none;
        outline: none;
    }
    h1,h2,h3,h4,h5,h6{ 
        font-family:'Maven Pro', sans-serif;
    }
    ol,ul,li{
        list-style:none;
    }
    img{

        display:block;
        width:100%;
        height:100%;
    }
`;

export default GlobalStyle2;
