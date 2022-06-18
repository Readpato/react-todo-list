import { Container, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import NewTaskInput from "./components/NewTaskInput";
import TaskList from "./components/TaskList";
interface Task {
  text: string;
  id: number;
  completed: boolean;
}

const App = () => {
  const titleName: string = "Todo list!";
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const handleNewTask = (task: string) => {
    if (task === "") {
      return;
    }
    const id = Date.now();
    const text = task;
    const newTask: Task = { text: text, id: id, completed: false };
    setTasks([...tasks, newTask]);
  };
  const completeTask = (id: number) => {
    const completedTaskIndex = tasks.findIndex((task) => task.id === id);
    tasks[completedTaskIndex].completed = true;
    setTasks([...tasks]);
  };
  return (
    <Container bg="purple.900" maxW="full" h="calc(100vh)" color="pink.400">
      <Flex direction="column" alignItems="center" justifyItems="center">
        <Text fontSize="3xl" fontStyle="italic">
          {titleName}
        </Text>
        <NewTaskInput onNewTask={handleNewTask} />
        {tasks.length === 0 ? (
          <Text mt="5">No tasks. Go enjoy your day!</Text>
        ) : (
          <TaskList currentTasks={tasks} onCompletedTask={completeTask} />
        )}
      </Flex>
    </Container>
  );
};

export default App;
