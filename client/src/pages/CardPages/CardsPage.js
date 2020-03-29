
  import React,{useState, useEffect} from 'react'
  import axios from 'axios'
  import { Link } from 'react-router-dom';
  import { Card, Button, Radio } from 'semantic-ui-react';
  import RenderAnswers from '../../components/RenderAnswers/RenderAnswers';

  import './CardPages.styles.scss'

  

  const CardsPage = (props) => {

  const [cards, setCards] = useState([])
  
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
      // if(cardAnswers === true){ 
        if(cards.card.id.cardAnswers === true){ 
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
        cards.map( card => (
          <Card key={`cards-${card.id}`}> 
            <Card.Content> 
              <Card.Header> 
              { card.question }
              </Card.Header>
            </Card.Content>

            <Button as={Link} to={`/groups/${card.id}`} color='blue'> 
              View
            </Button>

          </Card>
              
          )

        ))
    }

    export default CardsPage