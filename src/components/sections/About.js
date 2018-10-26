import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';

class About extends Component {
    render(){
        return(
            <Section id="about" className='relative'>


                <Col xs={12} md={8} mdPush={4}>
                    <h1 className="title">Our Story</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, atque debitis labore laborum quam repudiandae temporibus velit vitae voluptas. At eaque enim est illo impedit odit, praesentium quaerat quasi quibusdam rerum tempore veniam voluptatibus? Adipisci aspernatur delectus, doloremque esse facilis impedit molestias nam nisi odit, officiis omnis, quod repellat rerum saepe ut? Aperiam distinctio ducimus explicabo libero voluptate. Adipisci alias animi atque aut beatae corporis delectus dolore eaque est illo ipsa ipsam laudantium maiores natus necessitatibus neque odit officiis pariatur porro quas qui quia quidem quo recusandae rem saepe similique tempora unde vero, voluptas? Assumenda commodi debitis distinctio illum libero magnam molestiae optio quam rem. Blanditiis debitis delectus enim excepturi in ipsam nulla rerum sapiente ullam voluptatum. Ab aliquam amet animi aspernatur assumenda
                    </p>
                </Col>
                <Col xs={12} md={4} mdPull={8} className="text-center vertical-center">
                    <img src="/images/about_photo.jpg" style={{width: '100%'}} alt=""/>
                </Col>
            </Section>
        )
    }
}
export default About;