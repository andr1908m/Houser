import { hot } from "react-hot-loader";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import "fullpage.js";

class Root extends React.Component<{}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // console.log(this.state)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(Root);
