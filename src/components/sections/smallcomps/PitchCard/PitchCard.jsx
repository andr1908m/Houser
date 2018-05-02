import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {TweenLite, Linear, TimelineLite} from 'gsap';


class PitchCard extends Component {

  constructor(props){
    super(props);

    this.updateBuffer = 0
    this.right =
    this.top =
    this.left =
    this.bottom = null;

    this.setRight = (el) =>{
      this.right = el;
    }

    this.setLeft = (el) =>{
      this.left = el;
    }

    this.setTop = (el) =>{
      this.top = el;
    }

    this.setBottom = (el) =>{
      this.bottom = el;
    }

    this.state = {
      animationPlayed:false
    }
  }

  animateSides() {
    if(this.props.active === true){

      this.left.style.width = "1px"
      this.right.style.width = "1px"
      this.top.style.height = "1px"
      this.bottom.style.height = "1px"

      TweenLite.defaultEase = Linear.easeNone;

      const tl = new TimelineLite();
      tl.fromTo(".right", 1, {height:0}, {height:"99%"})
        .fromTo(".top", 1, {width:0}, {width:"99.5%"})
        .fromTo(".left", 1, {height:0}, {height:"99%"})
        .fromTo(".bottom", 1, {width:0}, {width:"99.7%"})
        .to('.left, .right, .top, .bottom', 1,{backgroundColor:'gray', borderColor: 'gray',});

      tl.delay(1)
      tl.timeScale(5); //play faster

      // this.setState({animationPlayed:true})
    }

  }

  componentDidUpdate(){
    if(this.state.updateBuffer === 3)
      this.animateSides();
    else
      
  }

  render(){
    console.log(this.state)
    
    return (
        <div className="main-pitch-card">
          <div className="container">

            <div ref={this.setRight} className="right"></div>
            <div ref={this.setTop} className="top"></div>
            <div ref={this.setLeft} className="left"></div>
            <div ref={this.setBottom} className="bottom"></div>

            <div className="pitch-card" id="left">
              <img src='https://dummyimage.com/50x50.jpg' alt='hello'/>
              <h2>
                Establish Criteria
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus inventore. Omnis reiciendis excepturi voluptatum minus, aliquam optio mollitia? Ducimus, ullam?
              </p>
            </div>
            <div className="pitch-card" id="mid">
              <img src='https://dummyimage.com/50x50.jpg' alt='hello'/>
              <h2>
                Establish Criteria
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus inventore. Omnis reiciendis excepturi voluptatum minus, aliquam optio mollitia? Ducimus, ullam?
              </p>
            </div>
            <div className="pitch-card" id="right">
              <img src='https://dummyimage.com/50x50.jpg' alt='hello'/>
              <h2>
                Establish Criteria
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus inventore. Omnis reiciendis excepturi voluptatum minus, aliquam optio mollitia? Ducimus, ullam?
              </p>
            </div>
          </div>
        </div>
    );
  }
}

PitchCard.propTypes = {
  activeSection: PropTypes.number
}

export default PitchCard;
