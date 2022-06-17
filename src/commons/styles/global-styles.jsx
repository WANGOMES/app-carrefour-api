import { createGlobalStyle } from "styled-components";
import CarrefourImg from '../../assets/images/background.jpeg'

const globalStyles = createGlobalStyle`

    *{
        outline: none;
    }
    html, body{
        width: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }
    #root{
        backgound: url(${CarrefourImg});
        heigth: 100%;
        width: 100%;
        backgound-size: cover;
        background-position: center center;
    }
    .mb-2 {
        margin-bottom: 16px;
    }
    .pt-2 {
        padding-top: 16px;
    }
    .cursor {
        cursor: pointer;
    }
`
export default globalStyles