import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Card = (props) => {
  const [card, setCard] = useState([])
  const {groupID} = props

  useEffect( () => {
    axios.get(`/api/groups/${groupID}/cards`,).then( res => {
      console.log(res.data)
      setCard(res.data)
    })
  }, [])

  const mapCards = () => {

      return (
      <>
        {card.map( card =>(
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


