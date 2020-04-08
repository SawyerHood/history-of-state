import React from "react"

class IntervalContainer extends React.Component {
  intervals = []

  setInterval = (...args) => {
    this.intervals.push(window.setInterval(...args))
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval)
  }

  render() {
    return this.props.children(this.setInterval)
  }
}

class UpdateButton extends React.Component {
  state = { count: 0 }
  render() {
    return (
      <IntervalContainer>
        {(setInterval) => (
          <button
            onClick={() =>
              setInterval(
                () => this.setState({ count: this.state.count + 1 }),
                1000
              )
            }
            style={{ fontSize: "10vh" }}
          >
            {this.state.count}
          </button>
        )}
      </IntervalContainer>
    )
  }
}

export default UpdateButton
