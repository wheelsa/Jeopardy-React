import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './header.styles.scss';
import Card from './cards/Card';

const Header = () => {
  const [category, setCategory] = useState([])
  
  useEffect( ()=> {
    axios.get('api/groups').then(res => {
      setCategory(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  
    const groups = () => {
        return (
        <>
          {category.map( group => (
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

export default Header