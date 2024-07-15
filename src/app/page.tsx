"use client"

import ToDoList from "@/components/toDoList";
import Galery from "@/components/galery";
import Quiz from "@/components/quiz"
import { useState } from "react";

import MenuBar from "@/components/menuBar";
const Page =()=> {
  const [selectProject, setSelectProject] = useState<number>(0)
  const showProject =(n:number)=> {
    setSelectProject(n);
    console.log(selectProject)
  }
  return (
    <>
      <MenuBar
        showProject={showProject}
        selectProject={selectProject}
      />
    {selectProject ===0 && <ToDoList />}
    {selectProject ===1 && <Galery />}
    {selectProject ===2 && <Quiz />}
    </>
  );
}

export default Page;