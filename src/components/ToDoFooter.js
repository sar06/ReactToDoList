import React, { Component } from "react"

const ToDoFooter = (props) => {
  return (
    <div className="filters footer">
      <label>{`${props.itemsLeft} item left`}</label>
      <ul>
        <li>
          <a onClick={() => props.filterFunction("All")} href="#">
            All
          </a>
        </li>
        <li>
          <a onClick={() => props.filterFunction("Active")} href="#">
            Active
          </a>
        </li>
        <li>
          <a onClick={() => props.filterFunction("Completed")} href="#">
            Completed
          </a>
        </li>
        <li>
          <a href="#">Clear Completed</a>
        </li>
      </ul>
    </div>
  )
}

export default ToDoFooter