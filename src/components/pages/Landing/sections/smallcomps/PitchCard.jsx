import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TweenLite, Linear, TimelineLite } from 'gsap';


class PitchCard extends Component {

  constructor(props) {
    super(props);

    this.container = React.createRef();
  }

  animateSides() {
    const $ = document.querySelector.bind(document);
    $(".left").style.width =
    $(".right").style.width = 
    $(".top").style.height = 
    $(".bottom").style.height = "1px";

    TweenLite.defaultEase = Linear.easeNone;

    const tl = new TimelineLite();
    tl.fromTo(".right", 1, { height: 0 }, { height: "99%" })
      .fromTo(".top", 1, { width: 0 }, { width: "99.5%" })
      .fromTo(".left", 1, { height: 0 }, { height: "99%" })
      .fromTo(".bottom", 1, { width: 0 }, { width: "99.7%" })
      .to('.left, .right, .top, .bottom', 1, { backgroundColor: 'gray', borderColor: 'gray', });

    tl.delay(1)
    tl.timeScale(5); //play faster
  }

  componentDidUpdate() {
    if (this.props.active === true)
      this.animateSides();
  }

  render() {
    return (
      <div className="main-pitch-card">
        <div className="right"></div>
        <div className="top"></div>
        <div className="left"></div>
        <div className="bottom"></div>

        <div className="pitch-card" id="left">
          <img src='https://dummyimage.com/50x50.jpg' alt='hello' />
          <h2>
            Establish Criteria
              </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus inventore. Omnis reiciendis excepturi voluptatum minus, aliquam optio mollitia? Ducimus, ullam?
              </p>
        </div>
        <div className="pitch-card" id="mid">
          <img src='https://dummyimage.com/50x50.jpg' alt='hello' />
          <h2>
            Establish Criteria
              </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus inventore. Omnis reiciendis excepturi voluptatum minus, aliquam optio mollitia? Ducimus, ullam?
              </p>
        </div>
        <div className="pitch-card" id="right">
          <img src='https://dummyimage.com/50x50.jpg' alt='hello' />
          <h2>
            Establish Criteria
              </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus inventore. Omnis reiciendis excepturi voluptatum minus, aliquam optio mollitia? Ducimus, ullam?
              </p>
        </div>
      </div>
    );
  }
}

export default PitchCard;
