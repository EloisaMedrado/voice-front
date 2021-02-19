import React, {useState, useEffect} from 'react';
import './General.css';
import {useHistory} from "react-router-dom";
import Api from './Api';

function About(props) {
  let sol = '';
  useEffect(() => {
    Api.get('/'+ sol)
    .then(function(response) {
      setData(response.data);
      setTimeout(function () {
        window.location.reload();
      }, 30 * 10000);
    })
    .catch(function (error) {
      history.push('/error');
    });
  }, []);

  const [data, setData] = useState([]);

  const history = useHistory();
  const {state} = props.location;

  function goBackMain() {
    history.push("/");
  };

  if(!state || !state.sol) {
    goBackMain();
    return null;
  }
  sol = state.sol;
  let {lastUpdate} = state;

  return (
    <div className="About">
      <div className="InnerAbout">
        <p className="border">Sol: {data.sol}</p>
        <p className="border">Low: {data.low}° C</p>
        <p className="border">Average: {data.average}° C</p>
        <p className="border">High: {data.high}° C</p>

        <button onClick={goBackMain}>Go back</button>
        <p>Last Update: {lastUpdate}</p>
        <p>*Updated every 10 minutes*</p>
      </div>
    </div>
  );
}

export default About;
