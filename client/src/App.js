import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Container, } from 'semantic-ui-react';


import './App.css';

import Home from './pages/HomePage/Home';
import GroupsPage from './pages/GroupPages/GroupsPage';
import GroupView from './pages/GroupPages/GroupView';
import CardsPage from './pages/CardPages/CardsPage';
import CardViewPage from './pages/CardPages/CardViewPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Container>
      <Switch>
      
        <Route exact path='/' component={Home} />
        <Route exact path="/groups" component={GroupsPage} />
        <Route exact path='/groups/:group_id' component={GroupView} />
        <Route exact path='/groups/:group_id/cards/' component={CardsPage} />
        <Route path='/groups/:group_id/cards/:id' component={CardViewPage} />
        <Route path='/api/groups/:group_id/cards' component={NewCardPage}

      </Switch>
      </Container>
    </div>
  );
}

export default App;
