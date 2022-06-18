import { List } from "@chakra-ui/react";
import SingleTask from "./SingleTask";

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

type TodoListProps = {
  currentTasks: Array<Task>;
  onCompletedTask: (id: number) => void;
};

const TaskList = ({ currentTasks, onCompletedTask }: TodoListProps) => {
  const deleteTask = (id: number) => {
    onCompletedTask(id);
  };
  return (
    <List spacing={2} mt={5}>
      <SingleTask
        currentTasks={currentTasks}
        onCompletedTask={deleteTask}
      ></SingleTask>
    </List>
  );
};

export default TaskList;
