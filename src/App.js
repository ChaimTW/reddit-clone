import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/pages/Home/Home';
import PostPage from './Components/pages/PostPage/PostPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [topic, setTopic] = useState('r/popular.json');

  return (
    <Router>
      <div className="App">
        <Header setTopic={setTopic} />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} topic={topic} setTopic={setTopic} />} />
          <Route path='/post/:id' render={(props) => <PostPage {...props} topic={topic} setTopic={setTopic} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;