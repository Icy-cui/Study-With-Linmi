import React, { Component } from 'react'
import {HomeWapper} from './style'

import Banner from './components/Banner'

export class Home extends Component {
    render() {
        return (
            <HomeWapper>
                <Banner />
            </HomeWapper>
        )
    }
}

export default Home
