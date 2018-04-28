import React from 'react';
import Header from './sections/Header.jsx';
import Pitch from './sections/Pitch.jsx';
import {SectionsContainer, Section} from 'react-fullpage';
// import {TweenMax, Power2, TimelineLite} from "gsap";

const animateCard = (state) => {

  document.querySelector(".main-pitch-card").classList.remove("visible");

  if(state.activeSection === 1)
    document.querySelector(".main-pitch-card").classList.add("visible");
};

const Root = () => {
  const options = {
    sectionClassName:'section',
    anchors:['sectionOne', 'sectionTwo'],
    activeClass: 'active',
    scrollCallback : animateCard
  };

  return (
  <div>
    <SectionsContainer {...options}>
      <Section>
        <Header/>
      </Section>
      <Section>
        <Pitch/>
      </Section>
    </SectionsContainer>
  </div>
  )
}

export default Root;
