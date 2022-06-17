import { ListItem, Text, ListIcon } from "@chakra-ui/react";
import { ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface Tasks {
  text: string;
  id: number;
}

type SingleTaskProp = {
  currentTasks: Array<Tasks>;
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
  const tasksToDo = currentTasks.map((task) => (
    <ListItem
      key={task.id}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => handleClick(task.id)}
    >
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
    </ListItem>
  ));

  return <>{tasksToDo}</>;
};

export default SingleTask;
