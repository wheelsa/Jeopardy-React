import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import GroupsPage from './pages/GroupPages/GroupsPage';
import GroupView from './pages/GroupPages/GroupView';
import CardsPage from './pages/CardPages/CardsPage';
import CardViewPage from './pages/CardPages/CardViewPage';

function App() {

  return (
    <div>
      <Switch>
      
        <Route exact path='/' component={Home} />
        <Route exact path="/groups" component={GroupsPage} />
        <Route exact path='/groups/:group_id' component={GroupView} />
        <Route exact path='/groups/:group_id/cards/' component={CardsPage} />
        <Route exact path='/groups/:group_id/cards/:id' component={CardViewPage} />

      </Switch>
    </div>
  );
}

export default App;
