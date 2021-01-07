import styled from "styled-components";

export const HomeWapper = styled.div `
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div `
  float: left;
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div `
  float: right;
  width: 240px;
`;

export const TopicWapper = styled.div `
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
  height: 32px;
  line-height: 32px;
  float: left;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 10%;
  color: rgb(42, 42, 42);
  margin: 8px;
  padding-left: 4px;
  padding-right: 4px;
`;

export const ListItem = styled.div `
  box-sizing: border-box;
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    box-sizing: border-box; 
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div `
  box-sizing: border-box; 
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: rgb(153, 153, 153);
  }
`;