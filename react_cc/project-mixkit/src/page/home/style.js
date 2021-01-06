import styled from "styled-components";

export const HomeWapper = styled.div `
    width: 1280px;
`

export const BannerWapper = styled.div `
    display: block;
    box-sizing: border-box;
    margin: auto 170px;
    padding: 100px 20px;
    font-family: serif;
    color: #2a2a2a;
    .banner-text{
        line-height: 88px;
        font-size: 110px;
        font-weight: 500;
        font-stretch: 100%;
        letter-spacing: -0.06em;
        margin-top: 0;
        margin-bottom: 30px;
    }
    .banner-sec-text{
        font-size: 25px;
        font-weight: normal;
        text-rendering: optimizeLegibility;
    }
    .banner-effect-link{
        margin-right:40px;
        margin-top: 80px;
        box-sizing: border-box;
        
        .banner-effect-item{
            cursor: pointer;
            margin-right: 80px;
            font-size: 24px;
            color: rgb(42,42,42);
        }
    }
`