import React from 'react'

const questions = [
  {
    title: 'What is your fav color?'
  },
  {
    title: 'What is your fav food?'
  },
  {
    title: 'What is your fav car?'
  },
  {
    title: 'What is your favorite type of cat?'
  }
]

class Sample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentQuestionIdx: 0
    }
  }

  nextQ = () => {
    if (this.state.currentQuestionIdx < questions.length - 1) {
      return this.setState({ currentQuestionIdx: this.state.currentQuestionIdx + 1 })
    }
  }

  prevQ = () => {
    if (this.state.currentQuestionIdx > 0) {
      return this.setState({ currentQuestionIdx: this.state.currentQuestionIdx - 1 })
    }
  }

  isLastQ = () => {
    return this.state.currentQuestionIdx === questions.length - 1
  }

  render () {
    return (
      <div>
        <button onClick={this.prevQ}>Previous Question</button>
        <button onClick={this.nextQ}>{this.isLastQ() ? 'Finish' : 'Next Question' }</button>
        <h3>{questions[this.state.currentQuestionIdx].title}</h3>
      </div>
    )
  }
}

export default Sample
