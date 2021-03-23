import React from 'react';
import './Assets/base.css'
import Header from './Components/Header/Header'
import Routes from './Routes'
import { HashRouter, BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom' 

function App() {
  return (
    <HashRouter>
        <Router>
          <Switch>
              <Route path="/" component={Header}/>
          </Switch>
        </Router>
    </HashRouter>
  );
}

export default App;
