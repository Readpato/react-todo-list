import { ListItem, Text, ListIcon, Button, Flex } from "@chakra-ui/react";
import { ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface Task {
  text: string;
  id: number;
}

type SingleTaskProp = {
  currentTasks: Array<Task>;
};

const SingleTask = ({ currentTasks }: SingleTaskProp) => {
  const [completedTaskId, setCompletedId] = useState<Array<number>>([]);
  const handleClick = (id: number) => {
    if (completedTaskId.includes(id)) {
      const indexToDelete = completedTaskId.indexOf(id);
      completedTaskId.splice(indexToDelete, 1);
      setCompletedId([...completedTaskId]);
      return;
    }
    setCompletedId([...completedTaskId, id]);
  };
  const handleDeleteClick = () => {
    console.log(currentTasks);
    // setTasks()
  };
  const tasksToDo = currentTasks.map((task) => (
    <ListItem
      key={task.id}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      onClick={() => handleClick(task.id)}
    >
      <Flex alignItems="center" justifyContent="center">
        {completedTaskId.includes(task.id) ? (
          <ListIcon as={CheckCircleIcon} color="green.500" />
        ) : (
          <ListIcon as={ChevronRightIcon}></ListIcon>
        )}
        <Text
          fontSize="1xl"
          as={completedTaskId.includes(task.id) ? "s" : undefined}
        >
          {task.text}
        </Text>
      </Flex>
    </ListItem>
  ));

  return <>{tasksToDo}</>;
};

export default SingleTask;
