import React, {Component} from 'react';
import {} from 'react-bootstrap';

class FillerSection extends Component {
    render() {
        return (
            <div className="Filler-Section" id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default FillerSection;