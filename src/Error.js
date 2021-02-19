import React from 'react';
import './General.css';
import {useHistory} from "react-router-dom";

function About(props) {
  const history = useHistory();

  function goBackMain() {
    history.push("/");
  };

  return (
    <div className="About">
      <div className="InnerAbout">
        <p className="border">There was an error accessing the API data. Please contact an administrator.</p>

        <button onClick={goBackMain}>Try again</button>
      </div>
    </div>
  );
}

export default About;
