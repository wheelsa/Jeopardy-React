import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react'

import './card.styles.scss'

//

const CardChild = (props) => {

  const [showCard, setShowCard] = useState(true)
  const {card, groupID} = props
  
  const handleClick = () =>{
    setShowCard(false)
    return (console.log('asgasgwegegseg'))
  }
  const showAllCards = () =>
  {if (showCard === true){
    return(
   <Link className='noStyling' to={`/groups/${groupID}/cards/${card.id}`}>
  <div className="card" key={`card-${card.id}`} >
    <div className="container">
      <h1> {card.score} </h1>
    </div>
  </div>
  </Link>)
  
  }
    else {  
    return(
    <div className="card" key={`card-hide-${card.id}`}>
    <div className="container">
      <h2> Already Chosen </h2>
    </div>
    </div>)}}
      return (
        <>
          {showAllCards()}
        </>


  )
}

export default CardChild




// <Button as={Link} to={`/groups/${groupID}cards/${card.id}`} color='blue'> 
// Card
// </Button>