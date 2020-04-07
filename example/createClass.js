import createReactClass from 'create-react-class'
import React from 'react'

export default createReactClass({
  getInitialState() {
    return {count: 0}
  },
  onClick() {
    this.setState({
      count: this.state.count + 1,
    })
  },
  render() {
    return (
      <button style={{fontSize: '10vh'}} onClick={this.onClick}>
        {this.state.count}
      </button>
    )
  },
})
