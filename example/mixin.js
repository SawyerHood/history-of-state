import React from 'react'
import createReactClass from 'create-react-class'

const SetIntervalMixin = {
  componentWillMount: function () {
    this.intervals = []
  },
  setInterval: function (...args) {
    this.intervals.push(window.setInterval(...args))
  },
  componentWillUnmount: function () {
    this.intervals.forEach(clearInterval)
  },
}

export default createReactClass({
  mixins: [SetIntervalMixin],
  getInitialState() {
    return {count: 0}
  },
  componentDidMount() {
    console.log('yeet')
    this.setInterval(() => this.setState({count: this.state.count + 1}), 1000)
  },
  render() {
    return <button style={{fontSize: '10vh'}}>{this.state.count}</button>
  },
})
