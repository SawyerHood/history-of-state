import React from "react"

function withSetInterval(Component) {
  return class extends React.Component {
    intervals = []

    setInterval = (...args) => {
      this.intervals.push(window.setInterval(...args))
    }
    
    componentWillUnmount() {
      this.intervals.forEach(clearInterval)
    }

    render() {
      return <Component {...this.props} setInterval={this.setInterval} />
    }
  }
}

const UpdateButton = withSetInterval(
  class extends React.Component {
    state = { count: 0 }

    componentDidMount() {
      this.props.setInterval(
        () => this.setState({ count: this.state.count + 1 }),
        1000
      )
    }

    render() {
      return <button style={{ fontSize: "10vh" }}>{this.state.count}</button>
    }
  }
)

export default UpdateButton
