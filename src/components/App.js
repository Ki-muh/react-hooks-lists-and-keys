import React from "react";
import ColorItem from "./ColorItem";
import ColorList from "./ColorList";

const todos=["Eat Cake","Sleep","Go to the gym","Learn coding"]

function App() {
  return (
    <div>
      {/* <ColorList /> */}
      <h1>To do List</h1>
      {todos.map((todo,index)=>{
        // console.log(todo)
        // console.log(index)
        return <h3 key={index}>{todo}</h3>
        // return <ToDo todo={todo} key={index}/>
          
      })}
      {/* <ToDo /> */}
    </div>
  );
}

function ToDo({todo}){
  return <h3>{todo}</h3>
}

export default App;
