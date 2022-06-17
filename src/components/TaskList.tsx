import { List, Button } from "@chakra-ui/react";
import { useState } from "react";
import SingleTask from "./SingleTask";

interface Task {
  text: string;
  id: number;
}

type TodoListProps = {
  currentTasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList = ({ currentTasks, setTasks }: TodoListProps) => {
  return (
    <List spacing={2} mt={5}>
      <SingleTask currentTasks={currentTasks}></SingleTask>
    </List>
  );
};

export default TaskList;
