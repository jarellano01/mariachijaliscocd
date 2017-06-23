import React, {Component} from 'react';

import App from './components/App';
import {
    BrowserRouter as Router
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