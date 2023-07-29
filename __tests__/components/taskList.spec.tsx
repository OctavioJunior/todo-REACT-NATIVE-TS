import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {fireEvent, render} from '@testing-library/react-native';
import {useTaskList} from '../../src/hooks/useTaskList';
import {TasksProvider} from '../../src/context/TaskContext';
import {TaskList} from '../../src/components/TaskList';

describe('TaskList component', () => {
  it('remove a item at task list', async () => {
    render(<TaskList />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {wrapper: TasksProvider});

    const data = {id: '1', title: 'Task 01'};

    await act(() => result.current.addTask(data));

    expect(result.current.tasks[0].title).toEqual('Task 01');

    await act(() => result.current.removeTask('1'));

    expect(result.current.tasks.length).toEqual(0);
  });
});
