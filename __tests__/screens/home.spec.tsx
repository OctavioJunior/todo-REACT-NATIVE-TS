import React from 'react';
import {Home} from '../../src/screens/Home/index';
import {renderHook, act} from '@testing-library/react-hooks';
import {fireEvent, render} from '@testing-library/react-native';
import {useTaskList} from '../../src/hooks/useTaskList';
import {TasksProvider} from '../../src/context/TaskContext';

describe('Home page', () => {
  it('render correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Nova tarefa...');

    expect(inputNewTask).toBeDefined();

    expect(inputNewTask.props.placeholder).toBeTruthy();
  });

  it('add a new item in task list', async () => {
    const {result} = renderHook(() => useTaskList(), {wrapper: TasksProvider});

    const data = {id: '1', title: 'Task 01'};

    await act(() => result.current.addTask(data));

    expect(result.current.tasks).toBeTruthy();
  });

  it('add button is insert a new item in task list', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {wrapper: TasksProvider});

    const inputNewTask = getByPlaceholderText('Nova tarefa...');
    const button = getByTestId('addButton');

    const data = {id: '1', title: 'Task 01'};

    act(() => fireEvent.changeText(inputNewTask, data.title));

    await act(async () => await fireEvent.press(button));

    expect(result.current.tasks).toBeTruthy();
  });
});
