import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home';



import Event from './fullpages/events';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path={`/events`} component={Event}/>
                    <Route path="/" component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
