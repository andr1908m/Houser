import { hot } from "react-hot-loader";
import React, { Component } from 'react';

import Header from './sections/Header.jsx';
import Pitch from './sections/Pitch.jsx';
import SlideButtons from './sections/smallcomps/SlideButtons.jsx';

import DoSlide from 'do-slide';

// import {TweenMax, Power2, TimelineLite} from "gsap";

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {active:false, componentUpdates: 0};

    this.overlayRef = null;
    this.setOverlayRef = (ref)=> {
      this.overlayRef = ref;
    }

    this.containerRef = null;
    this.setContainerRef = (ref)=> {
      this.containerRef = ref;
    }

    this.state = {
      pitchActive:false
    }

  }

  // options = {
  //   sectionClassName:'section',
  //   anchors:['', ''],
  //   activeClass: 'active',
  //   scrollCallback : () => {
  //



  //     // if(this.state.componentUpdates === 0){
  //     //   this.setState({active: (scroll.activeSection===1)? true:false, componentUpdates:0})
  //     // }
  //     // else
  //     //   this.setState({active:false || this.state.active, componentUpdates:this.state.componentUpdates+1})
  //   }

  // }

  componentDidMount(){
    const slide = new DoSlide('.slide-container', {timingFunction:'ease-in-out', duration:1000});
    slide.getKeyboard().turnOn();

    slide.el.addEventListener
    slide.onBeforeChange((...params) => {
      this.activeSec = params[1];
      this.overlayRef.classList.toggle("header-overlay-ani");
    })
    slide.onChanged(() => {
      if(this.activeSec === 1){
        this.setState({pitchActive:true})
      }
      else
        this.setState({pitchActive:false})
    })
  }

  componentDidUpdate(){

  }
  render() {
    // console.log(this.state)
    return (
      <div className="wrap">
        <div ref={this.setContainerRef.bind(this)} className="slide-container">
          <Header overlayRef={this.setOverlayRef.bind(this)}/>
          <Pitch active={this.state.pitchActive}/>
        </div>
        <SlideButtons containerRef={this.containerRef} />
      </div>
    )
  }
}

export default hot(module)(Landing);
