import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import scrollToElement from 'scroll-to-element';

class NavbarCustom extends Component {
    componentDidMount(){
        let myID = document.getElementById("my-nav");

        let myScrollFunc = function() {
            let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100;
            let y = window.scrollY;

            if (y >= h) {
                myID.classList.remove("hide1");
            } else {
                myID.classList.add("hide1");
            }
        };

        window.addEventListener("scroll", myScrollFunc);
    }

    scrollToId(id){
        scrollToElement(id,{
            offset: -100,
            ease: 'inOutSine',
            duration: 1500
        })
    }

    render(){
        return (
            <Navbar inverse collapseOnSelect fixedTop id="my-nav" className="hide1">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Crystal Arts Dance</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={() => this.scrollToId('#about')}>About Us</NavItem>
                        <NavItem eventKey={2} onClick={() => this.scrollToId('#instructors')}>Instructors</NavItem>
                        <NavItem eventKey={2} onClick={() => this.scrollToId('#schedule')}>Schedule</NavItem>
                        <NavItem eventKey={2} onClick={() => this.scrollToId('#rentals')}>Rentals</NavItem>
                        <NavItem eventKey={2} onClick={() => this.scrollToId('#events')}>Events</NavItem>
                        <NavItem eventKey={2} onClick={() => this.scrollToId('#videos')}>Videos</NavItem>
                        <NavItem eventKey={2} onClick={() => this.scrollToId('#contact')}>Contact Us</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarCustom;