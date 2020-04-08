const React = require("react")
const { useEffect, useRef, useState } = React

function useSetInterval() {
  const intervals = useRef([])
  useEffect(() => {
    return () => {
      for (interval of intervals.current) {
        clearInterval(interval)
      }
    }
  })

  const customSetInterval = (...args) => {
    const res = setInterval(...args)
    intervals.current.push(res)
  }

  return customSetInterval
}

function Counter() {
  const setInterval = useSetInterval()
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setInterval(() => setCount((c) => c + 1), 1000)}>
      {count}
    </button>
  )
}
