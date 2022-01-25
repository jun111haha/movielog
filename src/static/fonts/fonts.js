import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./Roboto-Regular.woff";
import RobotoBold from "./Roboto-Bold.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "Roboto Regular";
        src: local("Roboto Regular"),
        url(${RobotoRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto Bold";
        src: local("Roboto Bold"),
        url(${RobotoBold}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;