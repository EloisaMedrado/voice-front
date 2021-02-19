import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import About from './About';
import Error from './Error';
import * as serviceWorker from './serviceWorker';

function Routes() {
    return (
      <Router>
        <div>
          <Switch>
             <Route exact path="/" component = {Main} />
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
