const React = require('react')
const {useState, useEffect} = React;

export default function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return <div>{count}</div>
}