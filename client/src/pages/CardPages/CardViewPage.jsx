// this is the page that shows the card clicked from the home page (like React101 for 100 please)

import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Button, Radio, Segment, Card, Form} from 'semantic-ui-react'
import { Link } from "react-router-dom"

const CardViewPage = (props) => {

  const [card, setCard] = useState({})
  const [value, setValue] = useState('')
  const [cardAnswers, setCardAnswers] = useState(false)
  const [team1, setTeam1] = useState([])
  const [team2, setTeam2] = useState({})


  const groupID = props.match.params.group_id
  const id = props.match.params.id
  const {answer1, answer2, answer3, answer4, question, score, correctAnswer} = card
  let team1TeamScore = team1.teamScore
  let team2TeamScore = team2.teamScore

    useEffect( ()=> {
      axios.get(`/api/groups/${groupID}/cards/${id}`).then(res => {
        setCard(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    useEffect( ()=> {
      axios.get(`/api/teams/1`).then(res => {
        setTeam1(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    useEffect( ()=> {
      axios.get(`/api/teams/2`).then(res => {
        setTeam2(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    const handleChange = (e, { value }) => 
    (setValue(value), console.log(value))
    

    const handleSubmit = () => {
    
      if (value === correctAnswer){
        if(team1.turn === true){
          let team1ScoreInt = parseInt(team1TeamScore)
          let scoreInt = parseInt(score)

        setTeam1(team1.teamScore = (team1ScoreInt + scoreInt).toString(), team1.turn = false)
        setTeam2( team2.turn = true)
        
        axios
        .put(`/api/teams/1`, team1 )
        .then(res => {
          props.history.push("/");
        })
        .catch(err => {
          console.log(err.response);
        });
        } else {
          let scoreInt = parseInt(score)
          let team2ScoreInt = parseInt(team2TeamScore)

          setTeam2(team2.teamScore = (team2ScoreInt + scoreInt).toString(), team2.turn = false)
          setTeam1( team1.turn = true)
          axios
          .put(`/api/teams/2`, team2 )
          .then(res => {
            props.history.push("/");
          })
          .catch(err => {
            console.log(err.response);
          });
        }
      } else {
        alert('Sorry, thats the wrong answer!')
        props.history.push("/")
      }
      console.log(team1)
      }
  

    
 
    const cardFlip = () => {
      
      if(cardAnswers === false){ 
        return (
        <>
          <h2> For {score} Points Your Question is:</h2>
          <Card key={`cards-${card.id}`}>
            <Card.Content>
              <Card.Header>
                {question}
              </Card.Header>
            </Card.Content>
          </Card>
        </>)
    }
    else {
      return (
        <>
          <Form onSubmit={handleSubmit}>
            <h2> Select Your Answer</h2>
            <Form.Field>
              <Card>
                <Card.Content>
                  <Card.Description>
                    <Radio
                      label={`${answer1}`}
                      name='answersGroup'
                      value={`${answer1}`}
                      checked={value === `${answer1}`}
                      onChange={handleChange}
                    /><br />
                    <Radio
                      label={`${answer2}`}
                      name='answersGroup'
                      value={`${answer2}`}
                      checked={value === `${answer2}`}
                      onChange={handleChange}
                    /><br />
                    <Radio
                      label={`${answer3}`}
                      name='answersGroup'
                      value={`${answer3}`}
                      checked={value === `${answer3}`}
                      onChange={handleChange}
                    /><br />
                    <Radio
                      label={`${answer4}`}
                      name='answersGroup'
                      value={`${answer4}`}
                      checked={value === `${answer4}`}
                      onChange={handleChange}
                    /><br />
                  </Card.Description>
                </Card.Content>
              </Card>
            </Form.Field>
            <br />
          <Form.Field>
              Selected answer: <b>{value}</b>
            </Form.Field>
            <br />
            <Form.Button> Submit</Form.Button>
          </Form>
        
        </> )
      }
    }
  

  const flipAnswers = () => {
    setCardAnswers(!cardAnswers)
  }




  return (

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
