import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
      {
        id: 1,
        text: 'Save the planet',
      },
      {
        id: 2,
        text: 'Plant a tree'
      },
      {
        id: 3,
        text: 'Get rid of corporations'
      },
    ]}
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
              <input type="text" id="add" name="add" placeholder="Add to do" />
              <i className="fas fa-plus-circle"></i>
            </div>
            {
              this.state.tasks.map(function (note) {
                return (
                  <div className="task" key={note.id} >
                    <input type="checkbox" id="task" name="task" />
                    <label htmlFor="task">{note.text}</label>
                    <i class="fas fa-edit"></i>
                    <i id="trash" class="fas fa-trash-alt"></i>
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
