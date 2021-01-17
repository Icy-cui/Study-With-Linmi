import React, { Component } from "react";
import { InfoWapper, InfoItem } from "../style";

export class Information extends Component {
  render() {
    return (
      <InfoWapper>
        <div className="info-left">
          <p className="infoitem-left">
            Mixkit is a free gallery of awesome stock video clips, music tracks,
            sound effects and video templates.
          </p>
        </div>
        <div className="info-right">
          <InfoItem>
            We carefully curate clips, tunes, and templates from some of the
            world’s most talented creators with all content available for free.
          </InfoItem>
          <InfoItem>
            Our free library is growing fast, so you’ll always find the perfect
            high-quality item to download and use in your project. Make sure you
            join the Mixkit Crew below to get exclusive access to HD videos
            every week!
          </InfoItem>
          <InfoItem>
            Mixkit is brought to you by Envato, the company behind some of the
            world’s leading marketplaces for creative assets and creative
            people.
          </InfoItem>
          <InfoItem>
            We are constantly growing our community of contributors. Visit our
            contributor page if you are interested in being a member of the
            community, and would like to have your work showcased on Mixkit.
          </InfoItem>
        </div>
      </InfoWapper>
    );
  }
}

export default Information;
