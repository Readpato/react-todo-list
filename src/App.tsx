import { Container, Flex, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
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
  const [areTasksCompleted, setAreTasksCompleted] = useState<boolean>(false);
  useEffect(() => {
    if (!localStorage.getItem("My tasks")) {
      return;
    }
    const existingTasksInStorage = JSON.parse(
      localStorage.getItem("My tasks")!
    );
    setTasks(existingTasksInStorage);
  }, []);

  const handleNewTask = (task: string) => {
    if (task === "") {
      return;
    }
    const id = Date.now();
    const text = task;
    const newTask: Task = { text: text, id: id, completed: false };
    updateLocalStorage(newTask);
    setTasks([...tasks, newTask]);
  };
  const updateTaskStatus = (id: number): void => {
    const taskToUpdate = tasks[tasks.findIndex((task) => task.id === id)];
    if (taskToUpdate.completed === true) {
      taskToUpdate.completed = false;
      setTasks([...tasks]);
      return;
    }
    taskToUpdate.completed = true;
    setAreTasksCompleted(true);
    setTasks([...tasks]);
  };
  const deleteCompletedTasks = (): void => {
    const notCompletedTasks = tasks.filter((task) => task.completed === false);
    deleteTaskInStorage(notCompletedTasks);
    setTasks(notCompletedTasks);
    setAreTasksCompleted(false);
  };
  const updateLocalStorage = (newTask: Task): void => {
    if (!localStorage.getItem("My tasks")) {
      const arrayOfTasks: Array<Task> = [];
      arrayOfTasks.push(newTask);
      localStorage.setItem("My tasks", JSON.stringify(arrayOfTasks));
      return;
    }
    const existingTasksInStorage = JSON.parse(
      localStorage.getItem("My tasks")!
    );
    existingTasksInStorage.push(newTask);
    localStorage.setItem("My tasks", JSON.stringify(existingTasksInStorage));
  };
  const deleteTaskInStorage = (notCompletedTasks: Array<Task>) => {
    localStorage.setItem("My tasks", JSON.stringify(notCompletedTasks));
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
          <>
            <TaskList currentTasks={tasks} onTaskClick={updateTaskStatus} />
            {areTasksCompleted ? (
              <Button
                mt="3"
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", backgroundColor: "yellow.200" }}
                onClick={deleteCompletedTasks}
              >
                Delete accomplished tasks
              </Button>
            ) : undefined}
          </>
        )}
      </Flex>
    </Container>
  );
};

export default App;
