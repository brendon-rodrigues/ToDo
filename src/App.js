import React, { Component } from "react";
import "./styles.css";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

class ToDo extends Component {
  state = {
    task: "",
    taskList: []
  };
  add = (event) => {
    const { task, taskList } = this.state;

    event.preventDefault();

    if (task === "") return;

    const newTask = {
      id: new Date(),
      text: task
    };
    this.setState({
      taskList: taskList.concat(newTask),
      task: ""
    });
  };
  remove = (id) => {
    const { taskList } = this.state;

    this.setState({
      taskList: taskList.filter((item) => item.id !== id)
    });
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div className="form">
        <form>
          <h1> Tarefa </h1>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.task}
              placeholder="Insira aqui sua tarefa"
            />
            <button className="icon" onClick={this.add}>
              <FaPlus />
            </button>
          </div>
          <div className="listBlock">
            <ul>
              {this.state.taskList.map((item) => (
                <li className="task" key={item.id}>
                  <div className="divItem">{item.text}</div>
                  <div className="divButton">
                    <button
                      className="icon"
                      onClick={() => this.remove(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDo;
