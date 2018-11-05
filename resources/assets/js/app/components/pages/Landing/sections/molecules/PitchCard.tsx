import * as React from "react";
import { TweenLite, Linear, TimelineLite } from "gsap";

interface PitchState {
  animationPlayed: boolean;
}
class PitchCard extends React.Component<PitchProps, PitchState> {
  private right: React.RefObject<HTMLDivElement>;
  private top: React.RefObject<HTMLDivElement>;
  private left: React.RefObject<HTMLDivElement>;
  private bottom: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.right = React.createRef();
    this.top = React.createRef();
    this.left = React.createRef();
    this.bottom = React.createRef();

    this.state = {
      animationPlayed: false
    };
  }

  animateSides(): void {
    if (
      this.left.current &&
      this.right.current &&
      this.top.current &&
      this.bottom.current
    ) {
      this.left.current.style.width = "1px";
      this.right.current.style.width = "1px";
      this.top.current.style.height = "1px";
      this.bottom.current.style.height = "1px";
    }
    TweenLite.defaultEase = Linear.easeNone;

    const tl = new TimelineLite();
    tl.fromTo(".right", 1, { height: 0 }, { height: "99%" })
      .fromTo(".top", 1, { width: 0 }, { width: "99.5%" })
      .fromTo(".left", 1, { height: 0 }, { height: "99%" })
      .fromTo(".bottom", 1, { width: 0 }, { width: "99.7%" })
      .to(".left, .right, .top, .bottom", 1, {
        backgroundColor: "gray",
        borderColor: "gray"
      });

    tl.delay(1);
    tl.timeScale(5); //play faster
  }

  componentDidUpdate() {
    console.log("did update!", this.props);
    if (this.props.active === true) this.animateSides();
  }

  render() {
    return (
      <div className="main-pitch-card">
        <div ref={this.right} className="right" />
        <div ref={this.top} className="top" />
        <div ref={this.left} className="left" />
        <div ref={this.bottom} className="bottom" />

        <div className="pitch-card" id="left">
          <img src="https://dummyimage.com/50x50.jpg" alt="hello" />
          <h2>Establish Criteria</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            neque vitae qui autem libero, natus ut! Velit unde accusamus
            inventore. Omnis reiciendis excepturi voluptatum minus, aliquam
            optio mollitia? Ducimus, ullam?
          </p>
        </div>
        <div className="pitch-card" id="mid">
          <img src="https://dummyimage.com/50x50.jpg" alt="hello" />
          <h2>Establish Criteria</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            neque vitae qui autem libero, natus ut! Velit unde accusamus
            inventore. Omnis reiciendis excepturi voluptatum minus, aliquam
            optio mollitia? Ducimus, ullam?
          </p>
        </div>
        <div className="pitch-card" id="right">
          <img src="https://dummyimage.com/50x50.jpg" alt="hello" />
          <h2>Establish Criteria</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            neque vitae qui autem libero, natus ut! Velit unde accusamus
            inventore. Omnis reiciendis excepturi voluptatum minus, aliquam
            optio mollitia? Ducimus, ullam?
          </p>
        </div>
      </div>
    );
  }
}

interface PitchProps {
  active: boolean;
}

export default PitchCard;
