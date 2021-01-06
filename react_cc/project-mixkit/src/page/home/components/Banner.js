import React, { Component } from 'react'
import {BannerWapper} from '../style'

export class Banner extends Component {
    render() {
        return (
            <BannerWapper>
                <p className="banner-text">Free assets for your next video project</p>
                <p className="banner-sec-text">Awesome Stock Video Clips, Stock Music, Sound Effects & Video Templates. All available for free!</p>
                <div className="banner-effect-link">
                    <a className="banner-effect-item" href="/">Stock Video</a>
                    <a className="banner-effect-item" href="/">Stock Music</a>
                    <a className="banner-effect-item" href="/">Sound Effects</a>
                    <a className="banner-effect-item"  href="/">Video Templates</a>
                </div>
            </BannerWapper>
        )
    }
}

export default Banner
