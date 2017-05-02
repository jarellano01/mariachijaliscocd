import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import App from './components/App';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


class Routes extends Component {
    render() {
        return (
            <Router>
                <App/>
            </Router>

        )
    }
}

export default Routes;