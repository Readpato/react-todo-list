import { Container, Flex, Text } from "@chakra-ui/react";
import NewTaskInput from "./components/NewTaskInput";

const App = () => {
  const titleName: string = "Todo list!";
  return (
    <Container bg="purple.900" maxW="full" h="calc(100vh)" color="pink.400">
      <Flex direction="column" alignItems="center" justifyItems="center">
        <Text fontSize="3xl" fontStyle="italic">
          {titleName}
        </Text>
        <NewTaskInput />
      </Flex>
    </Container>
  );
};

export default App;
