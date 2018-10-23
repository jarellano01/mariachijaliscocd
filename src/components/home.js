import React, { Component } from 'react'

import NavbarCustom from './NavbarCustom'
import Background from './Background'
import Landing from './sections/Landing'
import About from './sections/About'
import Contact from './sections/Contact'
import Videos from './sections/Videos'
import { withFirebase } from '../firebase'

class App extends Component {
  render () {
    return (
      <div>
        <Background/>
        <NavbarCustom/>
        <Landing/>
        <About/>
        <Videos/>
        <Contact/>
      </div>
    )
  }
}

export default withFirebase(App)
