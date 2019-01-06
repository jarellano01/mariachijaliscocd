import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import scrollToElement from 'scroll-to-element';
import './NavbarCustom.css';

class NavbarCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {title: 'About', link: '#about'},
                {title: 'Videos', link: '#videos'},
                {title: 'Contact Us', link: '#contact'}
            ]
        }
    }

    componentDidMount() {
        let myID = document.getElementById("my-nav");

        let myScrollFunc = function () {
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

    scrollToId = (id) => {
        scrollToElement(id, {
            offset: -50,
            ease: 'inOutSine',
            duration: 1500
        })
    };

    renderNavItems = () => {
        return this.state.navItems.map((item) => {
            return (
                <NavItem key={item.title} onClick={() => this.scrollToId(item.link)}>{item.title}</NavItem>
            )
        })
    };

    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop id="my-nav" className="hide1 Navbar-Custom">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><img src="/images/logo-horizontal.png" alt=""/></a>
                      {/* <a href="#">Mariachi Jalisco</a> */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {this.renderNavItems()}
                    </Nav>
                </Navbar.Collapse>
                {/*<Link to="/events">*/}
                    {/*<div className="show-events">*/}
                        {/*Upcoming Events*/}
                    {/*</div>*/}
                {/*</Link>*/}
            </Navbar>
        )
    }
}

export default NavbarCustom;