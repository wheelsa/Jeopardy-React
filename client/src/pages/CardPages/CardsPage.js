import React,{useState, useEffect} from 'react'
  import axios from 'axios'
  import { Link } from 'react-router-dom';
  import { Card, Button, Radio } from 'semantic-ui-react';
  import './CardPages.styles.scss'
  
  const CardsPage = (props) => {
    const [item, setItem] = useState([])
    const groupID = props.match.params.group_id
  
    
        useEffect( ()=> {
          axios.get(`/api/groups/${groupID}/cards`).then(res => {
            setItem(res.data)
  
          }).catch(err => {
            console.log(err)
          })
        }, [])
        console.log(item)

    const deleteCard = (id) => (
      axios.delete(`api/groups/${groupID}/cards/`)
      .catch(err => {
        console.log(err)
      })
    )

    //need to edit with a form
    const editCard = (id) => (
      axios.patch(`/api/groups/${groupID}/cards/`).then(res => {
        setItem(res.data)
        console.log('clicked')
      }).catch(err => {
        console.log(err)
      }),
    [])

    const mapCards = () => {
      return ( 
        item.map( card => (
          <Card key={`cards-${card.id}`}> 
            <Card.Content> 
              <Card.Header> 
              { card.question } 
              </Card.Header>
              </Card.Content>
            <Link to={`/groups/group.id/cards/${card.id}`}><Button color='blue'>Click to View</Button></Link>
            <Button onClick={() =>editCard(`${card.id}`)} color='blue'> 
              Click to Edit
            </Button>
            <Button onClick={() => deleteCard(`${card.id}`)} color="blue">
              Click to Delete
            </Button>
            
          </Card>
          )
        ))


    }

  return (
    <>
    {mapCards()}
    </>
  )
    }
 
    export default CardsPage