import { List } from "@chakra-ui/react";
import SingleTask from "./SingleTask";

interface Tasks {
  text: string;
  id: number;
}

type TodoListProps = {
  currentTasks: Array<Tasks>;
};

const TaskList = ({ currentTasks }: TodoListProps) => {
  return (
    <List spacing={2} mt={5}>
      <SingleTask currentTasks={currentTasks}></SingleTask>
    </List>
  );
};

export default TaskList;
