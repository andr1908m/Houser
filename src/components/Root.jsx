import { hot } from "react-hot-loader";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Landing from './pages/Landing/Landing.jsx';

const Hello = (props) => {
  const { match } = props;
  return <h1>hello  {match.params.hey}<Link to="/">to home</Link></h1>
}
class Root extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // console.log(this.state)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/hello/" component={Hello}/>
          <Route exact path="/hello/:hey" component={Hello}/>
        </div>
      </Router>
    )
  }
}

export default hot(module)(Root);
