import React, {useState,useEffect} from "react"
import axios from 'axios'

import { Button, Radio, Segment, Card, Form} from 'semantic-ui-react'

const CardViewPage = (props) => {

  const [card, setCard] = useState({})
  const [value, setValue] = useState('')
  const [cardAnswers, setCardAnswers] = useState(false)



  const groupID = props.match.params.group_id
  const id = props.match.params.id
  const {answer1, answer2, answer3, answer4, question, score} = card

    useEffect( ()=> {
      axios.get(`/api/groups/${groupID}/cards/${id}`).then(res => {
        setCard(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    const handleChange = (e, { value }) => setValue(value)
 
    const cardFlip = () => {
      
      if(cardAnswers === false){ 
        return (
        <>
        <h2> For {score} Points Your Question is:</h2>
         <Card key={`cards-${card.id}`}> 
           <Card.Content> 
             <Card.Header> 
             { question }
             </Card.Header>
           </Card.Content>
         </Card>   
        </>)
        }
      else {
        return (
        <>
            <Form>
            <h2> Select Your Answer</h2>
           
            <Form.Field>
              <Radio
                label={`${answer1}`}
                name='answersGroup'
                value={`${answer1}`}
                checked= {value === `${answer1}`}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label={`${answer3}`}
                name='radioGroup'
                value={`${answer3}`}
                checked={value === `${answer3}`}
                onChange={handleChange}
              />
            </Form.Field>
          </Form>
          <br />
          <Form.Field>
              Selected answer: <b>{value}</b>
            </Form.Field>
            <br />
        </> )
      }
    }

    const flipAnswers = () =>{
      setCardAnswers(!cardAnswers)
    }
    

  

  return(

    <>
    
    <Segment>
    {cardFlip()}
    </Segment>

    <Button 
      color="blue"
      onClick={flipAnswers}>
        Flip
    </Button>
    </>
  )

}

export default CardViewPage