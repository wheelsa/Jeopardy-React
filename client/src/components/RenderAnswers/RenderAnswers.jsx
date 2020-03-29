import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Radio } from 'semantic-ui-react';

const RenderAnswer = (props) => {


  // commented out section is if we don't pass props to RenderAnswer
  // const [cards, setCards] = useState([])


  // useEffect( () => {
  //   axios.get(`/api/groups/${groupID}/cards/${cardID}`,).then( res => {
  //     console.log(res.data)
  //     setCards(res.data)
  //   })
  // }, [])
  const { card } = props


  return (
    <>
      <p>
        <Radio label={this.props.answer1} />
        <Radio label={this.props.answer2} />
        <Radio label={this.props.answer3} />
        <Radio label={this.props.answer4} />
        <Radio label={this.props.correctAnswer} />
       
      </p>
    </>
  )
}

export default RenderAnswer