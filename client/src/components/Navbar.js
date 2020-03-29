import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          Link to New Card
          {/* <Link to '../../../controllers/api/cards_controller.rb'> */}
        </Menu.Item>
        <Menu.Item>
          Return to Jeopardy Board
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Navbar);