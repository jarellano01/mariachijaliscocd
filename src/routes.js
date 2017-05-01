import React, {Component} from 'react';

import App from './components/App';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import About from './components/sections/About';

class Routes extends Component{
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/events" component={About} />
                </div>
            </Router>
        )
    }
}

export default Routes;