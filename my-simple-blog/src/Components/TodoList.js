import React, { useState } from "react";

const TodoList = () => {
  const [inputTodoText, setInputTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const newTodoSubmission = () => {
    const newTodo = { text: inputTodoText, completed: false };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setInputTodoText('');
  };

  const todoToggle = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);

  };

  return (
    <div>
      <input
        type="text"
        placeholder="새로운 todo 입력하기"
        onChange={
          (e) => {
            setInputTodoText(e.target.value);
          }
        }
        value = {inputTodoText}
      ></input>
      <button onClick={newTodoSubmission}>todo추가하기</button>

      <h3>현재까지의 todo 목록</h3>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={()=>todoToggle(index)}
            >
              {index}번 : {todo.text}
            </li>
          );
        })}
      </ul>
      {/*todoList.map(todo,index)*/}
    </div>
  );
};

export default TodoList;
