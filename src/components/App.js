import React, {Component} from 'react';
import './App.css';
import NavbarCustom from './NavbarCustom';
import Background from './Background';
import Subscribe from './sections/Subscribe';

import Landing from './sections/Landing';
import About from './sections/About';
import Instructors from './sections/Instructors';
import Contact from './sections/Contact';
import Videos from './sections/Videos';
import Rentals from './sections/Rentals';
import Classes from './sections/Classes';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Background/>
                <NavbarCustom/>

                <Landing />
                <About/>
                <Instructors/>
                <Classes/>
                <Videos/>
                <Rentals/>
                <Contact/>
                <Subscribe/>

            </div>
        );
    }
}

export default App;
