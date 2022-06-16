import { Container, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import NewTaskInput from "./components/NewTaskInput";
import TaskList from "./components/TaskList";
interface Task {
  text: string;
  id: number;
}

const App = () => {
  const titleName: string = "Todo list!";
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const handleNewTask = (task: string) => {
    if (task === "") {
      return;
    }
    const id = tasks.length + 1;
    const text = task;
    const newTask: Task = { text: text, id: id };
    setTasks([...tasks, newTask]);
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
          <TaskList currentTasks={tasks} />
        )}
      </Flex>
    </Container>
  );
};

export default App;
