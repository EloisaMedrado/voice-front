import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Main from './Main';
import Predicao from './Predicao';
import Vocabulario from './Vocabulario';
import About from './About';
import Cadastro from './Cadastro';
import Login from './Login';
import Error from './Error';
import VoiceRecorder from './VoiceRecorder';
import RecordRTC from './RecordRTC';
import * as serviceWorker from './serviceWorker';

function Routes() {
    return (
      <Router>
        <div>
          <Switch>
             <Route exact path="/" component = {Home} />
             <Route exact path="/infos" component = {Main} />
             <Route exact path="/vocabulario" component={Vocabulario} />
             <Route exact path="/predicao" component={Predicao} />
             <Route exact path="/about" component={About} />
             <Route exact path="/cadastro" component={Cadastro} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/voice" component = {VoiceRecorder} />
             <Route exact path="/rtc" component = {RecordRTC} />
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
