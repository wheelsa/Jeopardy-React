import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react'

const GroupsPage = () => {

const [groups, setGroups] = useState([])
  
  useEffect( ()=> {
    axios.get('/api/groups').then(res => {
      setGroups(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
return (
      groups.map( group => (
        <Card key={`group-${group.id}`}> 
          <Card.Content> 
            <Card.Header> 
            { group.name }
            </Card.Header>
          </Card.Content>

          <Button as={Link} to={`/groups/${group.id}`} color='blue'> 
            View
          </Button>

        </Card>
            
        )

      ))
  }
  

//  {/* <button as={Link} to={`groups/edit/${group.id}`} color='purple'>
//               Edit
//             </button> */}
    

export default GroupsPage