import React, { useState, useEffect} from 'react'
import axios from 'axios'

import './card.styles.scss'

import RenderAnswers from '../RenderAnswers/RenderAnswers'

const Card = (props) => {
  const [cards, setCards] = useState([])
  const {groupID} = props

  useEffect( () => {
    axios.get(`/api/groups/${groupID}/cards/`,).then( res => {
      console.log(res.data)
      setCards(res.data)
    })
  }, [])

  const mapCards = () => {

      return (
      <>
        {cards.map( card =>(
          <div className="card" key={card.id}>
            <div className="container">
              <h1> {card.score} </h1>
            </div>
          </div>)
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


