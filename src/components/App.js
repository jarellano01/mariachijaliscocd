import React, {Component} from 'react';
import './App.css';
import Landing from './sections/Landing';
import About from './sections/About';
import Instructors from './sections/Instructors';
import Contact from './sections/Contact';
import NavbarCustom from './NavbarCustom';
import Background from './Background';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Background/>
                <NavbarCustom/>
                <Landing />
                <About/>
                <Instructors/>
                <Contact/>

            </div>
        );
    }
}

export default App;
