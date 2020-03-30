
  import React,{useState, useEffect} from 'react'
  import axios from 'axios'
  import { Link } from 'react-router-dom';
  import { Card, Button } from 'semantic-ui-react';

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
    
    // const deletePost = (id) => (
    //   axios.delete(`api/groups/${groupID}/cards/${card.id}`)
    //   .catch(err => {
    //     console.log(err)
    //   })
    // )

    const mapCards = () => {
      return (
        item.map( card => (
          <Card key={`cards-${card.id}`}> 
            <Card.Content> 
              <Card.Header> 
              { card.question } 
              </Card.Header>
            </Card.Content>

            <Button as={Link} to={`/groups/groupID/cards/${card.id}`} color='blue'> 
              Click to View
            </Button><Button as={Link} to={`/groups/groupID/cards`} color='blue'> 
              Click to Edit
            </Button>
            {/* Button onClick={() => deletePost(${card.id})}
              Click to Delete
            </Button> */}

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