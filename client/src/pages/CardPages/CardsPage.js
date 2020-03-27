
  import React,{useState, useEffect} from 'react'
  import axios from 'axios'
  import { Link } from 'react-router-dom';
  import { Card, Button } from 'semantic-ui-react'
  
  const CardsPage = (props) => {

  const [cards, setCards] = useState([])
  const [cardAnswers, setCardAnswers] = useState(false)
  
  const groupID = props.match.params.group_id
  // const ID = props.match.params.id

    useEffect( ()=> {
      axios.get(`/api/groups/${groupID}/cards`).then(res => {
        setCards(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    const cardFlip = () => {
      if(cardAnswers === true){ 
        cards.map( card => (
         <Card key={`cards-${card.id}`}> 
           <Card.Content> 
             <Card.Header> 
             { card.question }
             </Card.Header>
           </Card.Content>
         </Card>   
         )
       ) }
    }
    
  return (
          <>
          </>
      )
    }

    export default CardsPage