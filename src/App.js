import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
      ],
      tasksInputValue: '',
    }
  }

  handletoDoInputChange = (e) => {
    this.setState({ tasksInputValue: e.target.value })
  }

  handleAddToDoClick = (e) => {
    var task = {
      id: Date.now(),
      text: this.state.tasksInputValue
    }

    var newNotes = [task, ...this.state.tasks]

    this.setState({
      tasks: newNotes,
      tasksInputValue: ''//clears input field
    })

  }

  handleDelete = (e) => {
    var taskToDelete = parseInt(e.target.id)
    var tasks = this.state.tasks
    var filteredTasks = tasks.filter((item)=>{
      return item.id !== taskToDelete
    })
    this.setState({tasks:filteredTasks})
  }

  render() {
    return (
      <div className="wrap">
        <header>
          <h1>Things to do</h1>
        </header>
        <main>
          <div className="tasks">
            <div className="task new-task">
              <label htmlFor="add"></label>
              <input type="text" id="add" name="add" placeholder="Add to do" value={this.state.tasksInputValue} onChange={this.handletoDoInputChange} required/>
              <button type="submit"><i className="fas fa-plus-circle" onClick={this.handleAddToDoClick}></i></button>
            </div>
            {
              this.state.tasks.map((task) => {
                return (
                  <div className="task" key={task.id} >
                    <input type="checkbox" id="task" name="task" />
                    <label htmlFor="task" key={task.id}>{task.text}</label>
                    <i className="fas fa-edit"></i>
                    <i  className="fas fa-trash-alt" id={task.id} onClick={this.handleDelete}></i>
                  </div>
                )
              })
            }
          </div>
        </main>
      </div>
    )
  }
}

export default App;
