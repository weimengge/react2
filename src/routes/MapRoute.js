import React, { Component } from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
// 封装成react组件
{/* <Switch>
    <Route path='/homepage' component={Homepage} />
    <Route path='/cart' component={Cart} />
    <Redirect to="/homepage"></Redirect>
</Switch> */}
export default class MapRoute extends Component {
    render() {
        // console.log(this.props) {a:1}
        // [
        //     {   
        //         path: "/login",
        //         component: Login
        //     },
        //     {
        //         path: "/",
        //         component: Home
        //     },
        //     {
        //         to: "/"
        //     }
        // ]
        return (
            <Switch>
                {
                    this.props.routes.map(Item => {
                        return Item.path ? (
                            <Route 
                                key={Item.path}
                                path={Item.path}
                                render={(props) => {
                                    return Item.auth ? (
                                        localStorage.getItem('id') ? (
                                            <Item.component {...props} routes={Item.children}/>
                                        ) : (
                                            <Redirect key={Item.path} to="/login"/>
                                        )
                                    ) : (
                                        <Item.component {...props} routes={Item.children}/>
                                    )
                                }}
                            />
                        ) : (
                            <Redirect key={Item.from} to={Item.to}/>
                        )
                    })
                }
            </Switch>
        )
    }
}
