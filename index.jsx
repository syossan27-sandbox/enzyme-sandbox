import React from 'react'
import ReactDOM from 'react-dom'

let MyConponents = React.createClass({
  render: () => {
    return (
      <h1>Hello, World!</h1>
    )
  }
})

ReactDOM.render(
  <MyConponents />,
  document.getElementById('contents')
)
