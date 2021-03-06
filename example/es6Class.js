import React from 'react'

export default class extends React.Component {
  state = {count: 0}

  onClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <button style={{fontSize: '10vh'}} onClick={onClick}>
        {this.state.count}
      </button>
    )
  }
}
