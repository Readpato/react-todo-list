import { Input, Button, Spacer, Flex } from "@chakra-ui/react";

const NewTaskInput = () => {
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
        type="text"
        maxW="16rem"
        variant="flushed"
        focusBorderColor="pink.400"
        placeholder="Insert new task"
        color="white"
      />
      <Spacer />
      <Button colorScheme="pink">Add new task</Button>
    </Flex>
  );
};

export default NewTaskInput;
