import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Componts/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from '@material-ui/core';
import NoMartch from './Componts/NoMarcth/NoMartch';
import Details from './Componts/Details/Details';


function App() {
  return (
       <Router>
      <div>
        <nav className="nav">
          <Container>
            <ul>
              <li>
                <Link to="/">Post All</Link>
              </li>    
            </ul>
          </Container>
        </nav>       
        <Switch>
          <Route path="/Post">
            <Post></Post>
          </Route>
          <Route path="/posts/:id">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Post />
          </Route>
          <Route path="*">
            <NoMartch></NoMartch>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
