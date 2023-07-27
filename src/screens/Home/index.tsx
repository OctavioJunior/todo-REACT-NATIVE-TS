import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface Task {
  id: string;
  title: string;
}

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    setTasks([...tasks, data]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Olá Dev!</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor={'#666666'}
          placeholder="Nova tarefa..."
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTaskList}>Minhas tarefas:</Text>
        {tasks.map((task: Task) => (
          <TouchableOpacity key={task.id} style={styles.taskButton}>
            <Text style={styles.taskTitle}>{task.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#292947',
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTaskList: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 35,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: 12,
    marginTop: 25,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskButton: {
    backgroundColor: '#29292e',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  taskTitle: {
    color: '#f1f1f1',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
