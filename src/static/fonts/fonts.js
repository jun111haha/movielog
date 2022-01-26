import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./Roboto-Regular.woff";
import RobotoBold from "./Roboto-Bold.woff";
import AppleGothicRegular from "./AppleSDGothicNeoR.woff"
import AppleGothicBold from "./AppleSDGothicNeoB.woff"

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
    @font-face {
        font-family: "Apple Gothic R";
        src: local("Apple Gothic R"),
        url(${AppleGothicRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Apple Gothic B";
        src: local("Apple Gothic B"),
        url(${AppleGothicBold}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;