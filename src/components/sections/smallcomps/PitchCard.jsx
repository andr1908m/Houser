import React, { Component } from 'react';

class PitchCard extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div >
        <div className="main-pitch-card">
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

export default PitchCard;
