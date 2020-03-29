// this is the page that shows each card in a certain group



import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react'

import './card.styles.scss'

const Card = (props) => {
  const [cards, setCards] = useState([])
  const {groupID} = props
  const [showCard, setShowCard] = useState(true)

  useEffect( () => {
    axios.get(`/api/groups/${groupID}/cards/`,).then( res => {
      setCards(res.data)
    })
  }, [])
  
  // const handleClick = (card) => {
  //     card.viewCard = false
  //   axios
  //       .put(`/groups/${groupID}/cards/${card.id}`, card )
  //       .then(res => {
  //       })
  //       .catch(err => {
  //         console.log(err.response);
  //       })
      // }

      const handleClick2 = () => {
        setShowCard(false)
        }
        
  const mapCards = () => {

      return (
        <>
 
        {cards.map( card =>{
          if (showCard === true){
            return(
           <Link className='noStyling' to={`/groups/${groupID}/cards/${card.id}`} onClick={handleClick2}>
          <div className="card" key={`card-${card.id}`}>
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
          )
        }
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

// <>
 
// {cards.map( card =>{
//   if (card.viewCard === true){
//     return(
//    <Link className='noStyling' to={`/groups/${groupID}/cards/${card.id}`}>
//   <div className="card" key={`card-${card.id}`}>
//     <div className="container">
//       <h1> {card.score} </h1>
//     </div>
//   </div>
//   </Link>)
  
//   }
//     else {  
//     return(
//     <div className="card" key={`card-hide-${card.id}`}>
//     <div className="container">
//       <h2> Already Chosen </h2>
//     </div>
//     </div>)}}
//   )
// }
// </>