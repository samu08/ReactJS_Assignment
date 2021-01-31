import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import Emp1 from './components/Emp1'
import Login from './components/Login'


import './App.css';

function App() {
  return (
    <Router>
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Assignment</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"></li>
      <li><a href="/posts">Posts</a></li>
      <li><a href="/create">create post</a></li>
      <li><a href="/login">SignIn</a></li>
    </ul>
  </div>
</nav>
<div className="container">
                <br />
                <Route path="/" exact component={Login}></Route>
                <Route path="/create" exact component={CreatePost}></Route>
                <Route path="/edit/:id" exact component={EditPost}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/posts" exact component={Emp1}></Route>
              
            </div>
</Router>
  );
}

export default App;
