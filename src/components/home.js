import React, {Component} from 'react';

import NavbarCustom from './NavbarCustom';
import Background from './Background';
import Landing from './sections/Landing';
import Subscribe from './sections/Subscribe';

import About from './sections/About';
import Instructors from './sections/Instructors';
import Contact from './sections/Contact';
import Videos from './sections/Videos';
import Rentals from './sections/Rentals';
import Classes from './sections/Classes';


class App extends Component {
    render() {
        return (
            <div>
                <Background/>
                <NavbarCustom/>
                <Landing />
                <About/>
                <Instructors/>
                <Classes/>
                <Videos/>
                <Rentals/>
                <Contact/>
                <Subscribe />
            </div>
        );
    }
}

export default App;
