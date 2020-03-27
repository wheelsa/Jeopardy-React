import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './home.styles.scss';
import Card from '../components/cards/Card';

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
              <span> {group.name} </span>
              <Card groupID = {group.id }/>
            </div>
          ))}
        </>
        )
    }

  return(
    <>
      <div className='page'>
        <div className='header'>
        {groups()}
          </div>
        </div>
    </>
   
  )
}

export default Home