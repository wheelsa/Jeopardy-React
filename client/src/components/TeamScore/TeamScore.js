import React, {useEffect, useState} from 'react'
import { Container, Header } from 'semantic-ui-react'
import axios from 'axios'

const TeamScore = (props)=>{

  const [teams, setTeams] = useState([])
  useEffect( ()=> {
    axios.get(`/api/teams/`).then(res => {
      setTeams(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const mapTeams = () =>{
    return (
    <Container>
    <Header> Teams Score </Header>
    <div className="ui items">
      {teams.map(team => (

          <div className="item" key={`team-${team.id}`}>
            <div className="content">
              <div className="header">{team.name}</div>
              <div className="description">{team.teamScore}</div>
            </div>
          </div>
        ))
      }

        </div>
      </Container>
    )
  }

  return(
    <>
     {mapTeams()}
    </>
  )
}

export default TeamScore