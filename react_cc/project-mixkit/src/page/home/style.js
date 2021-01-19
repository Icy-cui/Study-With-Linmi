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
      &:hover {
        color: #0c60a0;
      }
    }
  }
`;

export const ContentWapper = styled.div `
  width: 1280px;
  height: 200px;
  margin: 10px 10px 30px 20px;
`;

export const ContentTitle = styled.div `
  padding: 20px 5px 13px 5px;
  cursor: pointer;
  font-size: 24px;
  width: 150px;

  a {
    color: rgb(42, 42, 42);
    &:hover {
      color: #0c60a0;
    }
  }
`;

export const ContentInfo = styled.div `
  display: block;
  height: 150px;
  float: left;
  cursor: pointer;
`;

export const ContentItem = styled.div `
  margin-right: 30px;
  height: 161px;
  width: 286px;
  background: url(${(props) => props.imgUrl});
  background-size: 100%;
  .content-text {
    boxing-size: border-box;
    float: left;
    text-align: left;
    margin-top: 110px;
    margin-left: 20px;
    color: #fff;
    font-size: 18px;
  }
`;

export const InfoWapper = styled.div `
  display: flex;
  flex-direction: row;
  padding: 60px 23px;
  max-width: 1440px;
  .info-left {
    flex: 0 0 35%;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
    .infoitem-left {
      margin: auto;
      position: absolute;
      top: 25%;
      left: 18%;
      right: 10%;
      font-size: 32px;
      max-width: 367px;
    }
  }
  .info-right {
    flex: 0 0 55%;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const InfoItem = styled.p `
  font-family: Roboto;
  margin-bottom: 25px;
  font-size: 18px;
  padding: 5px;
`;

export const FooterWapper = styled.div `
  min-width: 1280px;
  margin-bottom: 20px;
`;

export const FooterListWapper = styled.div `
  display: flex;
  flex-direction: row;
  background: #fff;
  min-height: 210px;
  padding: 5px 40px 5px;
  margin-bottom: 20px;
`;

export const FooterItemList = styled.div `
  display: flex;
  flex-direction: column;
  width: 320px;
  .item-title {
    font-size: 20px;
    line-height: 30px;
  }
  .item {
    color: #2a2a2a;
    line-height: 30px;
    font-size: 12px;
  }
`;