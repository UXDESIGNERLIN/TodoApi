import React from 'react';

import './App.css';
import EnterTodo from './EnterTodo';
import TaskLists from './TaskLists';



function App() {
  return (
    <div className="App">
      <EnterTodo/>
      <TaskLists/>
    </div>
  );
}

export default App;
