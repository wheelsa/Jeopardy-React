import React, {useState, useEffect} from 'react'
import axios from 'axios'

const RenderAnswer = (props) => {

  // const [cards, setCards] = useState([])
 

  // useEffect( () => {
  //   axios.get(`/api/groups/${groupID}/cards/${cardID}`,).then( res => {
  //     console.log(res.data)
  //     setCards(res.data)
  //   })
  // }, [])
  const {card} = props
  

  return(
    <>
    <p>HELLOOOOO</p>
    </>
  )
}

export default RenderAnswer