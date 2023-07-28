import {useContext} from 'react';
import {TasksContext} from '../../context/TaskContext';
import {ITasksContext} from '../../utils/utils';

export function useTaskList(): ITasksContext {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('Usar esse hook dentro de um provder');
  }
  return context;
}
