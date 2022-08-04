import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        background-color: #c4c4c4;
    }
    body,input,button{
        font-family: 'Fira Sans', sans-serif;
    }
    a{
        text-decoration: none;
        
    }
    ul{
        list-style: none;
    }

`