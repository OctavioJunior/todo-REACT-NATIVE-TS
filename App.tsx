import React from 'react';
import {Home} from './src/screens/Home';
import {TasksProvider} from './src/context/TaskContext';

function App(): JSX.Element {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}

export default App;
