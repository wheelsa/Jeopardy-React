import React, {useState,useEffect} from "react"
import axios from 'axios'

import { Button, Header, Segment} from 'semantic-ui-react'

const CardViewPage = (props) => {

  const [card, setCard] = useState({})
  
  const groupID = props.match.params.group_id
  const id = props.match.params.id
  const {answer1, answer2, answer3, answer4} = card

    useEffect( ()=> {
      axios.get(`/api/groups/${groupID}/cards/${id}`).then(res => {
        setCard(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])

  

  return(
    <>
    <Segment>
      <Header as="h3">{ answer1 }</Header>
      <Header as="h3">{ answer2 }</Header>
      <Header as="h3">{ answer3 }</Header>
      <Header as="h3">{ answer4 }</Header>
    </Segment>


    <Button 
      color="blue"
      onClick={props.history.goBack}>
        Back
    </Button>
    </>
  )

}

export default CardViewPage