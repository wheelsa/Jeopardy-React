import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

import './home.styles.scss';
import Card from '../../components/card/Card';
import Navbar from '../../components/Navbar';


const Home = () => {
  const [group, setGroup] = useState([])


  useEffect( ()=> {
    axios.get('api/groups').then(res => {
      setGroup(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  
    const groups = () => {
        return (
        <>
          {group.map( group => (
            <div className="header-block" key={group.id}> 
              <h2> {group.name} </h2>
              <Card groupID = {group.id }/>
            </div>
      
          ))}
        </>
        )
    }

  return(
    <>
    <Navbar />
      <div className='page'>
        <div className='header'>
        {groups()}
          </div>
        </div>
    </>
   
  )
}

export default Home

