import React from 'react';
import Benefit from './smallcomps/Benefit.jsx'

class Benefits extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <section id="benefits">
                <h2>MORE BENEFITS</h2>
                <hr />
                <div className="benefits-grid">
                    <Benefit title="Time Savings" iconName="fas clock">description</Benefit>
                    <Benefit title="Money Saving" iconName="fas wallet">description</Benefit>
                    <Benefit title="No Revenue Loss" iconName="fab creative-commons-nc">description</Benefit>
                    <Benefit title="Market Changes" iconName="fas chart-line">description</Benefit>
                    <Benefit title="Selection Process" iconName="fas crown">description</Benefit>
                    <Benefit title="Complete Solution" iconName="fas check">description</Benefit>
                </div>
          </section>
        );
    }
}


export default Benefits;
