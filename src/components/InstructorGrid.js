import React, {Component}  from 'react';
import {Row, Col, Modal} from 'react-bootstrap';
import './InstructorGrid.css';
import nl2br from 'react-newline-to-break';

class InstructorGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instructors: [
                {
                    firstName: 'C.O.S.M.I.C',
                    lastName: '',
                    nickname: 'C.O.S.M.I.C',
                    description: "C.O.S.M.I.C. Dance Crew is a part-time community dance crew based in the San Fernando Valley. We strive to share our love of dance through innovative, fun, and/or compelling choreography. C.O.S.M.I.C. members have diverse backgrounds from amateur to professional dancers with various training.",
                    classes: 'Hip Hop',
                    classTimes: 'Mondays 7-8pm & Fridays 8-9pm',
                    image: 'cosmic.jpeg'
                },
                {
                    firstName: 'Courtney',
                    lastName: 'Shane',
                    nickname: 'Courtney Shane',
                    description: "Our teacher, Courtney Shane, earned a Bachelors Degree in Theatre Arts from San Francisco State University, trained with the Cirque clowns and studied with Julianne Moore at the Lee Strasberg Theatre & Film Institute. She has been directed on network television by Thom Eberhardt, who has directed Martin Short, Kurt Russell and Ben Kingsley. She has directed multiple film & tv projects and graduated with a degree in Cinema/TV Production. She’s been a guest speaker on many industry panels and has been teaching a purely business of acting & networking workshop monthly for over 2 years to peers that are booking implementing these biz tools. Courtney believes that the best strategy to build an acting career is to study the acting and the business of acting. Do what’s effective. Produce results. Train for auditions and working on set. Learn the business and make a plan. Come study the formula that works!",
                    classes: 'Acting Class + The Biz',
                    classTimes: 'Sundays 6pm - 9pm',
                    image: 'courney.jpeg'
                },
                {
                    firstName: 'Crystal',
                    lastName: 'Duran',
                    nickname: 'Crystal Duran',
                    description: "Crystal Duran was born and raised in Los Angeles, California. She is an Instructor, Choreographer, and Dancer from diverse dance styles such as Salsa, Bachata, Hip-hop, Ballroom and many more. She received her Bachelor of Science in Kinesiology-Dance at California State University of Northridge. She has had the opportunity to work on various shows such as Telemundo, Funny or Die, The Revolution Evolution Show, Kinesis, J.U.I.C.E., Los Angeles Bachata Festival, Palm Springs Salsa Extravaganza, Albuquerque's Latin Dance Festival and Seattle's Salsa Congress. She recently choreographed for Shemar Moore on the Bounce Back. Crystal is owner of CrystalArts Dance Academy where she aspires everyone to not only master creative movement but to dance for a purpose and with each person's highest level of excellence!",
                    classes: 'Batchata, Salsa',
                    classTimes: 'Mondays & Wednesdays 8-9pm',
                    image: 'crystal.jpg'
                },
                {
                    firstName: 'Jayy',
                    lastName: 'Gamble',
                    nickname: 'Jayy Gamble',
                    description: "Jayy started training at the Debbie Allen Dance Academy in 2011 and pursued dance soon after. Signed by the Movement Talent Agency in 2013, Jayy has worked with artists such as Ariana Grande, Todrick Hall, and Iggy Azalea and has appeared in BET Networks, Hot Chocolate Nutcracker starring Raven Symone and Debbie Allen. Now Jayy studies Dance/Choreography at CSU Northridge and has performed for countless events across Hollywood and Los Angeles.  Jayy also travels to various schools within LAUSD and teaches kids and teens dance and the history behind dance.",
                    classes: 'CrystalArts: Kids Team Training',
                    classTimes: 'Fridays 6-8pm & Saturdays 12pm -2pm',
                    image: 'jayy.jpeg'
                },
                {
                    firstName: 'Jose',
                    lastName: 'Espinoza',
                    nickname: 'Jose Espinoza',
                    description: "Jose Espinoza has been extensively trained in the traditional school of Argentine Tango. He carries with him the strong philosophy to make the dance about your dance partner and making the lady shine on the dance floor. As such, his teaching focuses heavily on the basics of connection and is one of the most well structured curriculums for tango. His teaching gives you a very strong fundamental skill set that allows you to build up with any master teacher. He is also known to be one of the fastest teachers to get a novice dancer to start learning in the dance class and getting them to comfortably dance at the milonga dance parties.",
                    classes: 'Argentine Tango',
                    classTime: 'Wednesdays 7pm - 8pm',
                    image: 'jose.png'
                },
                {
                    firstName: 'Liezel Marie',
                    lastName: 'Guzman',
                    nickname: 'Liezel Marie Guzman',
                    description: "Liezel Marie, Liz for short born and raised in Los Angeles has always been in love and highly involved in the hip hop dance industry and dance community. She has choreographed and danced along side with America Idol singers such as Jessica Sanchez and Chris GoLightly. She has toured, traveled, and taught all around the world with Antics Dance Company spreading the love of hip hop theatre. She is highly involved in dance conventions such as Urban Street Jam, World of Dance, Hip Hop Internationals, Maxt Out, and Soul De Soul. She is also a dancer at Universal Studio Hollywood. Liezel Marie is also associated with the hip hop dance community such as Zulu Maniacs, The Recipe Company, and Project La'Vaude. She currently teaches at LACHSA, Studio School, California State University Northridge, Zulu Dance Foundation, and BoogieZone Utopia. She absolutely loves to teach and spread her knowledge and creativity to the next generation. Her goal is to motivate talented people all over the world to chase after their dreams and reach for their highest stars.",
                    classes: 'Jazz Funk',
                    classTimes: 'Tuesdays 6pm - 7pm',
                    image: 'liezel.jpg'
                },
                {
                    firstName: 'Lorenzo',
                    lastName: 'Hanna',
                    nickname: 'Lorenzo "Zagga Zo" Hanna',
                    description: "Lorenzo “Zagga Zo” Hanna is now internationally known, but was first introduced to dance at a young age at social gatherings with his family. While growing up in South Florida, Lorenzo embraced his Caribbean roots while performing and competing inside of dancehall clubs and parties for many years.\n\nAfter winning several dancehall competitions and dancing next to some of the best dancehall dancers from Jamaica and South Florida, Lorenzo decided to take his love for dance to the next level by moving to Los Angeles, California to pursue his dreams. Lorenzo is currently part-owner of an internationally known Afro-Caribbean company and dance style calledDancehall Funk.\n\nCredits: American Airlines, America’s Got Talent, Reebok, Redbull, Shaggy, Chris Brown, Snoop Dogg, Dr. Dre, Kevin Lyttle, Flo Rida, Sean Kingston, Nicki Minaj, French Montana, Bruno Mars, and many more.",
                    classes: 'Dancehall Funk',
                    classTimes: 'Thursdays 8pm - 7pm',
                    image: 'lorenzo.jpg'
                },
                {
                    firstName: 'Nemi & Joseal',
                    lastName: '',
                    nickname: 'Nemi & Joseal',
                    description: "Nemesi “Nemi” Lomeli. A seasoned social dancer (Salsa, Bachata, etc.) at heart, Nemi began her Kizomba journey 2 years ago. However, in that short time, she has quickly risen to become one of the top dancers in the SoCal region! She has immediately drawn to kizomba because of the music, dance, and richness of the culture it expressed. She then invested countless hours practicing and training under the likes of Eddy Vents, T-boy, Rico Suave, Jamba & Adorée, Isabelle, and others. This, combined with her natural dancing style, led her unique style – authentic, fun, and a whole lotta Ginga!\n\nJoseal is an enthusiastic and charismatic dancer and instructor who fell in love with kizomba 4 years ago. Since then he has dedicated himself to learn the culture, music and dance as well as different styles within this discipline. He has trained with international instructors and attended numerous congresses in USA and abroad. He has worked very actively in California, being part of congresses like LA Zouk Congress and Kizomba invasion, BKS, LA Bachata Festival and many others. He has also taught internationally in Mexico and Spain. Joseal is as well a promoter and has been a kizomba host in various events and congresses (LA Salsa Congress, LA Grizzly Congress…) He believes that kizomba is more than a dance, is a culture and a very profound and unique way to interact and build meaningful relationships with people.",
                    classes: 'Kizomba',
                    classTimes: 'Tuesdays 7pm - 8pm',
                    image: 'nemy-joseal.jpeg'
                },
                {
                    firstName: 'Crystal',
                    lastName: 'Duran',
                    nickname: 'Crystal - La Preferida de',
                    description: "Nemesi “Nemi” Lomeli. A seasoned social dancer (Salsa, Bachata, etc.) at heart, Nemi began her Kizomba journey 2 years ago. However, in that short time, she has quickly risen to become one of the top dancers in the SoCal region! She has immediately drawn to kizomba because of the music, dance, and richness of the culture it expressed. She then invested countless hours practicing and training under the likes of Eddy Vents, T-boy, Rico Suave, Jamba & Adorée, Isabelle, and others. This, combined with her natural dancing style, led her unique style – authentic, fun, and a whole lotta Ginga!\n\nJoseal is an enthusiastic and charismatic dancer and instructor who fell in love with kizomba 4 years ago. Since then he has dedicated himself to learn the culture, music and dance as well as different styles within this discipline. He has trained with international instructors and attended numerous congresses in USA and abroad. He has worked very actively in California, being part of congresses like LA Zouk Congress and Kizomba invasion, BKS, LA Bachata Festival and many others. He has also taught internationally in Mexico and Spain. Joseal is as well a promoter and has been a kizomba host in various events and congresses (LA Salsa Congress, LA Grizzly Congress…) He believes that kizomba is more than a dance, is a culture and a very profound and unique way to interact and build meaningful relationships with people.",
                    classes: 'Kizomba',
                    classTimes: 'Thursdays 7-8pm',
                    image: 'shannon.jpg'
                }
            ],

            selected: {
                firstName: 'Jonathan',
                lastName: 'Arellano',
                nickname: 'Jon',
                description: "Jonathan is an awesome instructor and dancer.",
                classes: 'Batchata, Salsa',
                image: ''
            },
            modalOpen: false

        }
    }

    close = () => {
        this.setState({modalOpen: false});
    };

    open = (item) => {
        this.setState({
            selected: item,
            modalOpen: true
        });
    };

    renderImages = () => {
        return this.state.instructors.map((item, index) => {
            return (
                <Col xs={6} sm={4} md={3} onClick={() => this.open(item)} key={index} className="instructor-col">
                    <div className="col-square instructor-block">
                        <img className="img-responsive" src={`/images/instructors/${item.image}`} alt=""/>
                        <div>
                            {item.nickname}
                        </div>
                    </div>
                </Col>
            )
        })
    };

    render() {
        let {selected} = this.state;
        return (
            <div>
                <Row className="show-grid">
                    {this.renderImages()}
                </Row>

                <Modal show={this.state.modalOpen} onHide={this.close} bsSize="large">
                    <Modal.Header closeButton>
                        <Col xs={12} className="text-center">
                            <h3>{selected.nickname}</h3>
                            <span>{`${selected.classes}`}</span><br/>
                            <span>{`${selected.classTimes}`}</span>
                        </Col>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="show-grid">

                            <Col xs={12} sm={4}>
                                <div className="col-square">
                                    <img className="img-responsive" src={`/images/instructors/${selected.image}`}
                                         alt=""/>
                                </div>
                            </Col>
                            <Col xs={12} sm={8}>
                                <p>
                                    {nl2br(selected.description)}
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


export default InstructorGrid;