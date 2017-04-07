import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import './Section.css';

class Section extends Component {
    render() {
        return (
            <div className="Section" id={this.props.id}>
                <Grid>
                    <Row className="show-grid">
                        {this.props.children}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Section;