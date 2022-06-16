import { Container, Flex, Text } from "@chakra-ui/react";
import NewTaskInput from "./components/NewTaskInput";
interface Tasks {
  task: string;
  id: number;
}

const App = () => {
  const titleName: string = "Todo list!";
  const tasks: Array<Tasks> = [];
  const handleNewTask = (task: string) => {
    const id = tasks.length + 1;
    const newTask = task;
    tasks.push({ task: newTask, id: id });
    console.log(tasks);
  };
  return (
    <Container bg="purple.900" maxW="full" h="calc(100vh)" color="pink.400">
      <Flex direction="column" alignItems="center" justifyItems="center">
        <Text fontSize="3xl" fontStyle="italic">
          {titleName}
        </Text>
        <NewTaskInput onNewTask={handleNewTask} />
      </Flex>
    </Container>
  );
};

export default App;
