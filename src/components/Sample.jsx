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
  }
]

class Sample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentQuestion: 0
    }
  }

  render () {
    return (
      <div>
        <h3>{questions[this.state.currentQuestion].title}</h3>
      </div>
    )
  }
}

export default Sample
