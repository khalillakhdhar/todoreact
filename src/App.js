import React from "react";
export default class App extends React.Component {
  // eslint-disable-next-line react/no-direct-mutation-state
 constructor()
 {
  super();
this.state={
  event:'',
  date:'',
  myArray:[]
}

 }
 addEvent=(event)=>{
  let uparray=this.state.myArray;
  let todo={
    event:this.state.event,
    date:this.state.date
  }
  uparray.push(todo);
  this.setState({
  myArray:uparray,
  event:'',
  date:'',
  });
  event.preventDefault();
}
delete= (x)=>{
  if(window.confirm("vous voulez supprimez cet élément?"))
  {
  let uparray=this.state.myArray;
  uparray.splice(x,1);
  this.setState({
    myArray:uparray,
    event:'',
    });
    console.log("element of index "+x+"deleted successfully")
  }
}
 render(){
  return (
  <div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col">
    <form className="text-center" onSubmit={this.addEvent}>
    event:<input className="form-control" required value={this.state.event} onChange={(e)=>this.setState({event:e.target.value})}></input>
    date:<input className="form-control" type="datetime-local" required value={this.state.date} onChange={(e)=>this.setState({date:e.target.value})}></input>
    <button className="btn btn-success" type="submit">Ajouter</button>
   </form>    </div>
    <div class="col">
      
    </div>
  </div>
</div>
  
  <h1> Liste des tâches </h1>
  <table className="table table-bordered"><thead>
    <tr><th>Event</th><th>date</th><th>Action</th></tr></thead>
  {
    
  this.state.myArray.map((todo,index) => (
  
    <tr><td>{todo.event}</td><td>{todo.date}</td><td><button onClick={()=>this.delete(index)} className="btn btn-link btn-danger">x</button></td></tr>

   
  ))
  };
  </table>
  </div>
 
  )
} 
}