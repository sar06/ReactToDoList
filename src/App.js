import React, { Component } from "react"
import ToDoPage from "./container/ToDoPage"

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <ToDoPage />
      </div>
    )
  }
}

export default App