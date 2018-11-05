import { hot } from "react-hot-loader";
import * as React from "react";
import { Component } from "react";

import Header from "./sections/Header";
import Pitch from "./sections/Pitch";
import SlideButtons from "./sections/molecules/SlideButtons";

// import {TweenMax, Power2, TimelineLite} from "gsap";

interface State {
  pitchActive: boolean;
}

class Landing extends Component<any, State> {
  overlayRef: React.RefObject<HTMLDivElement>;
  private containerRef: React.RefObject<HTMLDivElement>;
  private activeSec: number;

  constructor(props: any) {
    super(props);

    this.overlayRef = React.createRef();

    this.containerRef = React.createRef();

    this.state = {
      pitchActive: false
    };

    this.activeSec = 0;
  }

  render() {
    return (
      <div className="wrap">
        <div ref={this.containerRef} className="slide-container">
          <Header overlayRef={this.overlayRef} />
          <Pitch active={this.state.pitchActive} />
        </div>
        <SlideButtons containerRef={this.containerRef} />
      </div>
    );
  }

  componentDidMount() {
    // $(".slide-container").fullpage({
    //   easing: "easeInOut"
    // });
    // TODO: change to fullpage.js
    // const slide = new DoSlide(".slide-container", {
    //   timingFunction: "ease-in-out",
    //   duration: 1000
    // });
    // slide.getKeyboard().turnOn();
    // slide.el.addEventListener;
    // slide.onBeforeChange((...params: Array<any>) => {
    //   this.activeSec = params[1];
    //   if (this.overlayRef.current !== null) {
    //     this.overlayRef.current.classList.toggle("header-overlay-ani");
    //   }
    // });
    // slide.onChanged(() => {
    //   if (this.activeSec === 1) {
    //     this.setState({ pitchActive: true });
    //   } else this.setState({ pitchActive: false });
    // });
  }
}

export default hot(module)(Landing);
