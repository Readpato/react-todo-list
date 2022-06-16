import { List, ListItem, Text, ListIcon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Tasks {
  text: string;
  id: number;
}

type TodoListProps = {
  currentTasks: Array<Tasks>;
};

const TaskList = ({ currentTasks }: TodoListProps) => {
  const tasksToDo = currentTasks.map((task) => (
    <ListItem
      key={task.id}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ListIcon as={ChevronRightIcon}></ListIcon>
      <Text fontSize="1xl">{task.text}</Text>
    </ListItem>
  ));

  return (
    <List spacing={2} mt={5}>
      {tasksToDo}
    </List>
  );
};

export default TaskList;
