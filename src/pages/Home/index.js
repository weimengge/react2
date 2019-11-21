import React, { Component } from 'react'
import {
  NavLink,
  Switch,
  Route
} from 'react-router-dom'
import MapRoute from '../../routes/MapRoute'
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          {/* Switch > Route */}
          {/* <Switch>
            <Route path='/home/homepage' component={Homepage} />
            <Route path='/home/cart' component={Cart} />
            <Route path='/home/person' component={Person} />
            <Redirect to="/home/homepage"></Redirect>
          </Switch> */}
          <MapRoute routes={this.props.routes}></MapRoute>
        </div>
        <div className="footer">
          <NavLink to="/home/homepage">首页</NavLink>
          <NavLink to="/home/cart">购物车</NavLink>
          <NavLink to="/home/person">个人中心</NavLink>
        </div>
      </div>
    )
  }
}
