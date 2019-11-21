import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import MapRoute from './routes/MapRoute'
import './app.css'
import routes from './routes/router.config'
ReactDOM.render((
    <Router>
        {/* Switch > Route */}
        {/* <Switch>
            <Route path='/' component={App}/>
            <Route path='/login' component={Login}/>
        </Switch> */}
        {/* <MapRoute routes={routes}></MapRoute> */}
        {/* <App /> */}
        <MapRoute routes={routes}></MapRoute>
    </Router>
), document.getElementById('root'));

