const React = require('react')
const {useState} = React;

window.React2 = React;

export default function Form() {
  const [text, setText] = React.useState("")
  const [isChecked, setIsChecked] = React.useState(false)
  return (
    <div style={containerStyle}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={style}
      />
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        style={{ ...checkBoxStyle }}
      />
    </div>
  )
}

const style = {
  height: "10vh",
  fontSize: 60,
}

const checkBoxStyle = {
  transform: "scale(2)",
  transformOrigin: " 0 0",
  zoom: 2,
  marginLeft: 12,
  marginBottom: 18,
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}



// }
