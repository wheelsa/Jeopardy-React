import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Container, } from 'semantic-ui-react';


import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/HomePage/Home';
import GroupsPage from './pages/GroupPages/GroupsPage';
import GroupView from './pages/GroupPages/GroupView';
import CardsPage from './pages/CardPages/CardsPage';
import CardViewPage from './pages/CardPages/CardViewPage';
import NewCardPage from './components/NewCardPage';

function App() {

  return (
    <div>
      <Container>
        <Navbar />
      <Switch>
      
        <Route exact path='/' component={Home} />
        <Route exact path="/groups" component={GroupsPage} />
        <Route exact path='/groups/:group_id' component={GroupView} />
        <Route exact path='/groups/:group_id/cards/' component={CardsPage} />
        <Route path='/groups/:group_id/cards/:id' component={CardViewPage} />
        <Route path='/groups/:group_id/cards/new' component={NewCardPage} />


      </Switch>
      </Container>
    </div>
  );
}

export default App;
