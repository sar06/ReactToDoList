import React, { Component } from "react"

const ToDoList = (props) => {
  return (
    <div>
      <ul className="todo-list">
        {props.listItems.map((item, idx) => {
          return (
            <li key={idx}>
              <label>{item.name}</label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList