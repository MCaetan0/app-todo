import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, settaskList] = useState<ITask[]>([]);
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={settaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
