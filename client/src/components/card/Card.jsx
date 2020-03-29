// this is the page that shows each card in a certain group



import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react'

import './card.styles.scss'

const Card = (props) => {
  const [cards, setCards] = useState([])
  const {groupID} = props

  useEffect( () => {
    axios.get(`/api/groups/${groupID}/cards/`,).then( res => {
      setCards(res.data)
    })
  }, [])

  const mapCards = () => {

      return (
      <>
        {cards.map( card =>(
           <Link className='noStyling' to={`/groups/${groupID}/cards/${card.id}`}>
          <div className="card" key={card.id}>
           
            <div className="container">
              <h1> {card.score} </h1>
            
            </div>
          
          </div>
          </Link>
          )
        )}
      </>
      )
  }
  
  return(

    <div>
      {mapCards()}
    </div>


  )
}

export default Card


// <Button as={Link} to={`/groups/${groupID}cards/${card.id}`} color='blue'> 
// Card
// </Button>