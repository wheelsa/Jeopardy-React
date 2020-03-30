import React, {useState,useEffect} from "react"
import axios from 'axios'
import { Button, Header, Segment, Card, } from 'semantic-ui-react'

const GroupView = (props) => {

const [group, setGroup] = useState({group: {}})
const groupID = props.match.params.group_id
const {name} = group

    useEffect( ()=> {
      axios.get(`/api/groups/${groupID}`).then(res => {
        setGroup(res.data)
        console.log(group)
      }).catch(err => {
        console.log(err)
      })
    }, [])

  

  return(
    <>
    <Segment>
      <Header as="h1">Group Name: { name }</Header>
      <Card>
        <Card.Content>
        </Card.Content>
      </Card>



    </Segment>


    <Button 
      color="blue"
      onClick={props.history.goBack}>
        Back
    </Button>
    </>
  )

}

export default GroupView




