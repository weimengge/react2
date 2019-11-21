import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import MapRoute from '../../../routes/MapRoute'
export default class Homepage extends Component {
    render() {
        return (
            <div className="tabs">
                <Link to="/home/homepage/hot">热门</Link>
                <Link to="/home/homepage/recommend">推荐</Link>
                <div>
                    <MapRoute routes={this.props.routes}/>
                </div>
            </div>
        )
    }
}
