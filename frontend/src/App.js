import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import HomePage from './pages/home.page'
import CreatePollPage from './poll/pages/createPoll.page'
import PollPage from './poll/pages/poll.page'

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage}/>
      <Route path='/create' component={CreatePollPage}/>
      <Route path='/poll/:pollID' component={PollPage}/>
    </Router>
  );
}

export default App;
