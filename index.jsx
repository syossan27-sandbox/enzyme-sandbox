import React from 'react'
import ReactDOM from 'react-dom'
import Foo from './Foo.jsx'

let MyComponent = React.createClass({
  render: () => {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Foo />
        <Foo />
        <Foo />
      </div>
    )
  }
})

export default MyComponent;
