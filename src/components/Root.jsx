import React, { Component } from 'react';
import Header from './sections/Header.jsx';
import Pitch from './sections/Pitch.jsx';
import {SectionsContainer, Section} from 'react-fullpage';

// import {TweenMax, Power2, TimelineLite} from "gsap";

class Root extends Component {
  constructor(props){
    super(props);
    this.state = {active:false, componentUpdates: 0};
  }

  options = {
    sectionClassName:'section',
    anchors:['sectionOne', 'sectionTwo'],
    activeClass: 'active',
    scrollCallback : (scroll) => {

      if(this.state.componentUpdates === 0){
        this.setState({active: (scroll.activeSection===1)? true:false, componentUpdates:0})
      }
      else
        this.setState({active:false || this.state.active, componentUpdates:this.state.componentUpdates+1})
    }
  }

  render() {
    console.log(this.state)
    return (
    <div>
      <SectionsContainer {...this.options}>
        <Section>
          <Header/>
        </Section>
        <Section>
          <Pitch active={this.state.active}/>
        </Section>
      </SectionsContainer>
    </div>
    )
  }
}

export default Root;
