import { Input, Button, Spacer, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface HandleNewTask {
  onNewTask: (newTask: string) => void;
}

const NewTaskInput = ({ onNewTask }: HandleNewTask) => {
  const [task, setTask] = useState("");
  const newTask = task;
  return (
    <Flex
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      w={{ base: "20rem", md: "25rem" }}
      h={{ base: "6rem", md: "4rem" }}
    >
      <Input
        onChange={(event) => setTask(event.target.value)}
        type="text"
        maxW="16rem"
        variant="flushed"
        focusBorderColor="pink.400"
        placeholder="Insert new task"
        color="white"
      />
      <Spacer />
      <Button onClick={() => onNewTask(newTask)} colorScheme="pink">
        Add new task
      </Button>
    </Flex>
  );
};

export default NewTaskInput;
