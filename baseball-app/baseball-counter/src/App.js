import React from 'react'
import { Display, Dashboard } from './components'

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0,
    outs: 0,
    walks: 0
  }

  clickHandler = e => {
    e.preventDefault()
    switch(e.target.name) {
      case 'strike-button':
        if (this.state.strikes < 0 || this.state.strikes > 3) {
          this.setState({
            ...this.state,
            strikes: 0
          })
        }
        if (this.state.strikes < 2) {
          this.setState({
            ...this.state,
            strikes: this.state.strikes + 1
          })
        } else if (this.state.strikes === 2) {
          this.setState({
            ...this.state,
            strikes: 0,
            outs: this.state.outs + 1
          })
        }
        break
      case 'ball-button':
          if (this.state.balls < 0 || this.state.balls > 4) {
            this.setState({
              ...this.state,
              balls: 0
            })
          }
          if (this.state.balls < 3) {
            this.setState({
              ...this.state,
              balls: this.state.balls + 1
            })
          } else if (this.state.balls === 3) {
            this.setState({
              ...this.state,
              balls: 0,
              walks: this.state.walks + 1
            })
          }
        break
      case 'foul-button':
        if (this.state.strikes < 0) {
          this.setState({
            ...this.state,
            strikes: 0
          })
        }
        if (this.state.strikes < 2) {
          this.setState({
            ...this.state,
            strikes: this.state.strikes + 1
          })
        } else if (this.state.strikes === 2) {
          this.setState({
            ...this.state,
            strikes: this.state.strikes
          })
        }
        break
      case 'hit-button':
        this.setState({
          ...this.state,
          hits: this.state.hits + 1,
          strikes: 0,
          balls: 0
        })
        break
      default:
        this.setState({
          strikes: 0,
          balls: 0,
          fouls: 0,
          hits: 0
        })
    }
  }

  render(){
    return(
      <>
        <Display count={this.state} />
        <Dashboard clickHandler={this.clickHandler}/>
      </>
    )
  }
}

export default App