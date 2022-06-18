import { ListItem, Text, ListIcon, Button, Flex } from "@chakra-ui/react";
import { ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

type SingleTaskProp = {
  currentTasks: Array<Task>;
  onCompletedTask: (id: number) => void;
};

const SingleTask = ({ currentTasks, onCompletedTask }: SingleTaskProp) => {
  const handleClick = (id: number, completed: boolean) => {
    onCompletedTask(id);
  };
  const tasksToDo = currentTasks.map((task) => (
    <ListItem
      key={task.id}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      onClick={() => handleClick(task.id, task.completed)}
    >
      <Flex alignItems="center" justifyContent="center">
        {task.completed ? (
          <ListIcon as={CheckCircleIcon} color="green.500" />
        ) : (
          <ListIcon as={ChevronRightIcon}></ListIcon>
        )}
        <Text fontSize="1xl" as={task.completed ? "s" : undefined}>
          {task.text}
        </Text>
      </Flex>
    </ListItem>
  ));

  return <>{tasksToDo}</>;
};

export default SingleTask;
