import styled from "styled-components";

export const MusicWapper = styled.div `
  overflow: hidden;
  margin: 0 auto;
`;
export const MusicHeader = styled.div `
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: 70px;
  padding-top: 0;
  background-color: #32268b;
  a {
    margin-top: 1.4rem;
    padding-left: 40px;
    font-size: 18px;
    color: #fff;
    font-height: 27px;
    text-decoration-line: none;
  }
`;

export const MusicBanner = styled.div `
  background-size: auto 90%, auto 100%;
  ${"" /* background-color: #554cb7; */}
  background: url("https://mixkit.imgix.net/static/heroes/music/foreground.png?h=600&auto=format");
`;

export const VideoWapper = styled.div `
  overflow: hidden;
  margin: 0 auto;
`;

export const VideoHeader = styled.div `
  position: relative;
  min-height: 70px;
  padding-top: 0;
  background-color: green;
`;