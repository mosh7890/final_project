import React from "react";
import { Link } from "react-router-dom"
import Home from "./home"

class FinalProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home />
    );
  }
}

export default FinalProject;


      // <div>
      //   <h1>Welcome to Oraculi!!!</h1>
      // <Link to="/User"><button type="button" className="btn btn-default">User</button></Link>
      // <Link to="/Mentor"><button type="button" className="btn btn-default">Mentor</button></Link>
      // </div>