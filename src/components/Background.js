import React, {Component} from 'react';

class Background extends Component {
    constructor (props) {
      super(props)
      this.state = {
        img: 'https://res.cloudinary.com/jarellano01/image/upload/v1540349194/mjcd_backdrop_thop0r.png'
      }
    }
    render() {
        return (
            // <img src={this.state.img} className="background" alt=""/>
            <div></div>
        )
    }
}

export default Background;