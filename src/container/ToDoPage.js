import React, { Component } from "react"
import AddToDo from "../components/AddToDo"
import ToDoList from "../components/ToDoList"
import ToDoFooter from "../components/ToDoFooter"

class ToDoPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: [
        {
          name: "Go to the Bank",
          status: "Completed"
        },
        {
          name: "Pickup Kids from School",
          status: "Active"
        },
        {
          name: "Make Dinner",
          status: ""
        }
      ],
      itemsLeft: 2,
      DisplayList: [
        {
          name: "Go to the Bank"
        },
        {
          name: "Pickup Kids from School"
        },
        {
          name: "Make Dinner"
        }
      ]
    }
  }

  filter = (statusType) => {
    let filteredList

    if (statusType !== "All") {
      filteredList = this.state.listItems.filter(
        (item) => item.status === statusType
      )
    } else filteredList = this.state.listItems
    this.setState({ DisplayList: filteredList })
  }

  render() {
    return (
      <div>
        <h1>todos</h1>
        <AddToDo />
        <ToDoList listItems={this.state.DisplayList} />
        <ToDoFooter
          itemsLeft={this.state.itemsLeft}
          filterFunction={this.filter}
        />
      </div>
    )
  }
}

export default ToDoPage