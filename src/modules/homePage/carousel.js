import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';
import slider5 from '../../assets/slider5.jpg';
import slider6 from '../../assets/slider6.jpg';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import CardMedia from '@material-ui/core/CardMedia';




export default function SimpleSlider () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
    };
    return (
      <div>
        <Hidden mdDown>
          <Container>
        <Slider {...settings}>
          <div >
            <img width='100%' src={slider1} alt=""/>
          </div>
          <div>
          <img width='100%' src={slider2} alt=""/>
          </div>
          <div>
          <img width='100%' src={slider3} alt=""/>
          </div>
          <div>
          <img width='100%' src={slider4} alt=""/>
          </div>
          <div>
          <img width='100%' src={slider5} alt=""/>
          </div>
          <div>
          <img width='100%' src={slider6} alt=""/>
          </div>
        </Slider>
        </Container>
        </Hidden>
        <Hidden lgUp>
        <CardMedia> <img src={slider3} width='100%' alt="" /></CardMedia>
        </Hidden>
      </div>
    );
  }