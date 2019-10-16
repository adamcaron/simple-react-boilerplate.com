import React from 'react'

const questions = [
  {
    title: 'What is your fav color?',
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
      currentQuestionIdx: 0,
      answers: {}
    }
    this.answerInput = React.createRef()
  }

  nextQ = () => {
    if (this.state.currentQuestionIdx < questions.length - 1) {
      this.answerInput.value = this.state.answers[this.getQuestionId()] || ''
      return this.setState({ currentQuestionIdx: this.state.currentQuestionIdx + 1 })
    }
  }

  prevQ = () => {
    if (this.state.currentQuestionIdx > 0) {
      this.answerInput.value = this.state.answers[this.getQuestionId()] || ''
      return this.setState({ currentQuestionIdx: this.state.currentQuestionIdx - 1 })
    }
  }

  isLastQ = () => {
    return this.state.currentQuestionIdx === questions.length - 1
  }

  getQuestionId = () => {
    return `question-${this.state.currentQuestionIdx + 1}`
  }

  handleInput = (e) => {
    const answers = { ...this.state.answers }
    answers[e.target.name] = e.target.value
    this.setState({ answers })
  }

  render () {
    const questionId = this.getQuestionId()
    console.log('this.state: ', this.state)
    return (
      <div>
        <button onClick={this.prevQ}>Previous Question</button>
        <button onClick={this.nextQ}>{this.isLastQ() ? 'Finish' : 'Next Question' }</button>
        <h3>{questions[this.state.currentQuestionIdx].title}</h3>
        <input
          type="text"
          name={questionId}
          onChange={this.handleInput}
          ref={el => this.answerInput = el}
          value={this.state.answers[questionId] || ''}
        />
      </div>
    )
  }
}

export default Sample
