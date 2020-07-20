import React from 'react';
import './App.css';


const Todo = (props) =>{ 
  console.log(props)
  return(
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
  )}

  let id = 0;

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo(){
    
    const text = prompt("Enter Todos");
    this.setState({
      todos: [...this.state.todos,{id: id++ , text: text, checked: false}],
    });
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  
  toggleCheckbox(id){
    this.setState({
      todos: this.state.todos.map((todo) =>{
        if(todo.id !== id) return todo;
        return{
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }
  render(){
    return(
      
      
      <div>
        <h1>Todo List ! </h1>
      
        <div>
          <button onClick={() => this.addTodo()}>Add Todo</button>
        </div>

        <div>
        <h3>Total Number of Todos: {this.state.todos.length}</h3>
        <h3>Total Number of checked Todos:{this.state.todos.filter(x => x.checked == true ).length} </h3>
        </div>
        {this.state.todos.map(todo =>  <Todo 
                                        todo={todo} 
                                        onDelete={() => this.removeTodo(todo.id)}
                                        onToggle = {() => this.toggleCheckbox(todo.id)}
                                        />)}
        {/* <Todo todos={this.state.todos} /> */}
      </div>
    )
  }
}

export default App;
