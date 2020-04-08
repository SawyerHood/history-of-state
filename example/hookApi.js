const React = require("react")
const { useState, useEffect } = React

const USERS = {
  sawyer: { name: "sawyer", food: "pasta" },
  ralph: { name: "ralph", food: "pizza" },
}

async function fetchUser(id) {
  await waitTimeout(1000)
  return USERS[id]
}

function waitTimeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

function User({ userID }) {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    setIsLoading(true)
    fetchUser(userID).then((user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [userID])

  if (!user || isLoading) {
    return <div>LOADING</div>
  }

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Food: {user.food}</div>
    </div>
  )
}

export default function Example() {
  const [userID, setUserID] = useState(null)
  return (
    <div>
      <div style={{marginBottom: 24}}>
      <button style={buttonStyle} onClick={() => setUserID("sawyer")}>
        Load User 1
      </button>
      <button style={buttonStyle} onClick={() => setUserID("ralph")}>
        Load User 2
      </button>
      </div>
      {userID !== null ? <User userID={userID} /> : null}
    </div>
  )
}

const buttonStyle = {
  fontSize: 40,
  marginRight: 24
}
