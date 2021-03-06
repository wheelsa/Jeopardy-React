import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './home.styles.scss';

import Card from '../../components/card/Card';
import Navbar from '../../components/Navbar';
import TeamScore from '../../components/TeamScore/TeamScore';
import { Container } from 'semantic-ui-react';


const Home = () => {
  const [group, setGroup] = useState([])


  useEffect(() => {
    axios.get('api/groups').then(res => {
      setGroup(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const groups = () => {
    return (
      <>
        {group.map(group => (
          <div className="header-block" key={group.id}>
            <h2> {group.name} </h2>
            <Card groupID={group.id} />
          </div>

        ))}
      </>
    )
  }

  return (
    <>
      <Container> <TeamScore />
        <div className='page'>
          <div className='header'>
            {groups()}
          </div>
        </div>
      </Container>
    </>

  )
}

export default Home

