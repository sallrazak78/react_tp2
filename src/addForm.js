import React, { Component } from 'react'

export default class AddTodo extends Component{
constructor(props){
    super(props)
    this.state={
        content:'',
        date:null,
        active:true
    }
}
handleChange=(e)=>{
    this.setState({[e.target.id]:e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state)
}
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit} >
                <label htmlFor="content" ><h4>Add new todo:</h4> </label>
                <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                <label htmlFor="date" ><h4>Date: </h4></label>
                <input type="datetime-local" id="date" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Ajouter Quelque chose a faire</button>
            </form>
        </div>
    )
}
}