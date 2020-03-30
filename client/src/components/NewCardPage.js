import React from 'react';
// import { Form, } from 'semantic-ui-react';

const NewCardPage = {
  render() {
    return (
      <div>
        <input ref='question' placeholder='Enter the Question' />
        <input ref='answer1' placeholder='Enter first answer option' />
        <input ref='answer2' placeholder='Enter second answer option' />
        <input ref='answer3' placeholder='Enter third answer option' />
        <input ref='answer4' placeholder='Enter fourth answer option' />
        <input ref='correctAnswer' placeholder='Enter the CORRECT answer exactly as it appears above' />
        <input ref='group_id' placeholder='Which column would you like this question in?' />
        <input ref='points' placeholder='How many points is this worth?' />
        <button color="blue">Submit</button>
      </div>
    )
  }
}

export default NewCardPage;