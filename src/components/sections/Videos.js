import React, {Component} from 'react';
import Section from '../Section';
import GridItem from '../GridItem'
import {Col, Row, Modal} from 'react-bootstrap';
import axios from "axios";
import YouTube from "react-youtube";
// import search from 'youtube-search';

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: null,
            modalOpen: false,
            selected: null
        }

    }
    select = (id) => {
        this.setState({
            selected: id,
            modalOpen: true
        })
    };
    close = () => {
        this.setState({modalOpen: false});
    };

    componentWillMount() {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=video&channelId=UCBUjqoMx35gv8BKd0pz7hag&key=AIzaSyD2qbpCK4gJfuYDlE8t9aM6n2i1GSrDeEE')
            .then((response) => {
                this.setState({
                    videos: response.data.items
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderGrid = () => {
        let {videos} = this.state;
        if (!videos) {
            return (
                <div>Loading ...</div>
            )
        }
        return videos.map((video) => {
            return (
                <GridItem
                    key={video.etag}
                    image={video.snippet.thumbnails.high.url}
                    title={video.snippet.title}
                    ratio="60%"
                    topOffset="-13%"
                    onClick={()=>this.select(video.id.videoId)}
                />
            )
        })
    };

    render() {
        return (
            <Section id="videos">
                <Col xs={12}>
                    <h1 className="title">Videos</h1>
                </Col>
                <Col xs={12}>
                    <Row>
                        {this.renderGrid()}
                    </Row>
                </Col>
                <Modal show={this.state.modalOpen} onHide={this.close} bsSize="large">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <YouTube
                            videoId={this.state.selected}
                            className="modal-video"
                        />
                    </Modal.Body>
                </Modal>
            </Section>
        )
    }
}
export default Videos;