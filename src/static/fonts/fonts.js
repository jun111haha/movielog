import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./Roboto-Regular.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "Roboto Regular";
        src: local("Roboto Regular"),
        url(${RobotoRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;