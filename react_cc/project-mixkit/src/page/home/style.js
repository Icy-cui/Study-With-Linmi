import styled from "styled-components";

export const HomeWapper = styled.div `
  font-family: serif;
  width: 1280px;
  max-width: 1440px;
  margin: 0;
  padding: 0;
`;

export const BannerWapper = styled.div `
  display: block;
  box-sizing: border-box;
  margin: auto 170px;
  padding: 100px 20px;
  color: #2a2a2a;
  .banner-text {
    line-height: 88px;
    font-size: 110px;
    font-weight: 500;
    font-stretch: 100%;
    letter-spacing: -0.06em;
    margin-top: 0;
    margin-bottom: 30px;
  }
  .banner-sec-text {
    font-size: 25px;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
  .banner-effect-link {
    margin-right: 40px;
    margin-top: 80px;
    box-sizing: border-box;

    .banner-effect-item {
      cursor: pointer;
      margin-right: 80px;
      font-size: 24px;
      color: rgb(42, 42, 42);
    }
  }
`;

export const ContentWapper = styled.div `
  width: 1280px;
  height: 200px;
  margin: 10px 10px 30px 20px;
`;

export const ContentTitle = styled.div `
  color: #2a2a2a;
  font-size: 24px;
  line-height: 20px;
  padding: 20px 5px;
`;

export const ContentInfo = styled.div `
  height: 150px;
`;
export const ContentItem = styled.div `
  display: block;
  float: left;
  margin-right: 30px;
  height: 161px;
  width: 286px;
  background: url("https://mixkit.imgix.net/static/home/video-thumb1.png?w=445&h=250&fit=crop&q=80&auto=format%2Ccompress");
  background-size: 100%;
  
  .content-text{
    boxing-size: border-box;
    float:left;
    text-align:left;
    margin-top:110px;
    margin-left: 20px;
    color: #fff;
    font-size: 18px;
  }
`;