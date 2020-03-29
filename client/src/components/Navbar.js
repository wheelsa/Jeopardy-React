import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <Menu>

<Link to='/groups/'>
            <Menu.Item
              name='newCard'
              id='newCard'
              >
                Select Group to Add a New Card To
              </Menu.Item>
          </Link>
        <Link to='/'>
        <Menu.Item
        name='home'
        id='home
        '>
          Return to Jeopardy Board
        </Menu.Item>
        </Link>
      </Menu>
    )
  }
}

export default withRouter(Navbar);