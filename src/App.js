import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './addForm'
class App extends Component {
 constructor(props){
   super(props)
   this.state={
    todos:[
      { id:1,content:'sleep at 22',date:new Date('2019-06-23T00:45:00'),active:false},
      { id:2,content:'get up at 6',date:new Date('2019-06-23T00:50:00'),active:false},
      { id:3,content:'go to school at 8',date:new Date('2019-06-23T00:59:00'),active:false},
      { id:4,content:'go home at 16',date:new Date('2019-06-24T01:00:00'),active:false},
  ]
  }
 }
 addTodo=(todo)=>{
    todo.id=this.state.todos.length+1
    let todos=[...this.state.todos,todo]
    this.setState({todos:todos})
 }
 deleteTodo=(id)=>{
  const todos=this.state.todos.filter(todo=>{
    return todo.id !==id
  })
  this.setState({todos:todos})
 }
 activeTodo=()=>{
   const todos=this.state.todos.map(todo=>{
      todo.date=new Date(todo.date)
     if(todo.date > Date.now()){
      let to={}
        to.id=todo.id
        to.content=todo.content
        to.date=todo.date
        to.active=true
        return to
     }else{
      let ts={}
      ts.id=todo.id
      ts.content=todo.content
      ts.date=todo.date
      ts.active=false
      return ts
     }
   })
   this.setState({todos:todos})
 }
  render(){
    setTimeout(()=>{
      this.activeTodo() 
      console.log(this.state.todos)
    },1000)
    return (
      <div className="App container">
        <h1 className="center-align blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} activeTodo={this.activeTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>)
  }
}

export default App;
