import React from 'react'

// const nextQuestion = (currentQuestion) => {
// }

const questions = [
  {
    title: 'What is your fav color?'
  },
  {
    title: 'What is your fav food?'
  },
  {
    title: 'What is your fav car?'
  }
]

class Sample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentQuestion: 0
    }
  }

  // function nextQuestion = (questions) => {
  //   // if (currentQuestion !== questions.length) {
  //     // getQuestionData(currentQuestion + 1)
  //   // }
  //   // submit
  //   this.setState(() => { currentQuestion: currentQuestion + 1 })
  // }

  render () {
    return (
      <div>
        {/* subheader */}
        {/*   back/forward */}
        {/*   numbers */}
        <h3>{questions[this.state.currentQuestion].title}</h3>
        {/* input */}
        {/* next-question(currentQuestion) */}
        {/* <button onClick={this.nextQuestion(questions)}>Next Question</button> */}
      </div>
    )
  }
}

export default Sample
