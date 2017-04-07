import React, {Component}  from 'react';
import {Col} from 'react-bootstrap';
import './GridItem.css';


class GridItem extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        let {image, title, onClick, ratio, topOffset} = this.props;
        return (
            <Col xs={6} sm={4} md={3} key={title} className="instructor-col" onClick={onClick}>
                <div className="col-square instructor-block" style={{paddingBottom: ratio}}>
                    <img
                        className="img-responsive"
                        src={`${image}`} alt=""
                        style={{zoom: '150%', top: topOffset}}
                    />
                    <div>
                        {title}
                    </div>
                </div>
            </Col>
        )
    }
}

export default GridItem;