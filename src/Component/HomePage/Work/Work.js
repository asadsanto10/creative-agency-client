import React from 'react';
import './Work.scss';
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Caro1 from '../../../images/carousel-1.png';
import Caro2 from '../../../images/carousel-2.png';
import Caro3 from '../../../images/carousel-3.png';
import Caro4 from '../../../images/carousel-4.png';
import Caro5 from '../../../images/carousel-5.png';
const Work = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section id="work">
            <Container>
                <h2 className="title">Here are some of <span>our work</span></h2>
                <Slider {...settings}>
                    <div className="single-carousel">
                        <img src={Caro1} alt=""/>
                    </div>
                    <div className="single-carousel">
                        <img src={Caro2} alt="" />
                    </div>
                    <div className="single-carousel">
                        <img src={Caro3} alt="" />
                    </div>
                    <div className="single-carousel">
                        <img src={Caro4} alt="" />
                    </div>
                    <div className="single-carousel">
                        <img src={Caro5} alt="" />
                    </div>
                    <div className="single-carousel">
                        <img src={Caro1} alt="" />
                    </div>
                </Slider>
            </Container>
        </section>
    );
};

export default Work;


