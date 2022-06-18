import { List } from "@chakra-ui/react";
import SingleTask from "./SingleTask";

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

type TodoListProps = {
  currentTasks: Array<Task>;
  onTaskClick: (id: number) => void;
};

const TaskList = ({ currentTasks, onTaskClick }: TodoListProps) => {
  const deleteTask = (id: number) => {
    onTaskClick(id);
  };
  return (
    <List spacing={2} mt={5}>
      <SingleTask
        currentTasks={currentTasks}
        onTaskClick={deleteTask}
      ></SingleTask>
    </List>
  );
};

export default TaskList;
