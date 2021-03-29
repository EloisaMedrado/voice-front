import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import About from './About';
import Error from './Error';
import VoiceRecorder from './VoiceRecorder';
import RecordRTC from './RecordRTC';
import * as serviceWorker from './serviceWorker';

function Routes() {
    return (
      <Router>
        <div>
          <Switch>
             <Route exact path="/" component = {Main} />
             <Route exact path="/voice" component = {VoiceRecorder} />
             <Route exact path="/rtc" component = {RecordRTC} />
             <Route exact path="/about" component={About} />
             <Route exact path="/error" component={Error} />
          </Switch>
        </div>
      </Router>
    );
};

ReactDOM.render(
  Routes(),
  document.getElementById('root')
);
