export const Todoitems=({todo ,handleStatus})=>{
    
return (<div>
    <div>id: {todo.id}</div>
    {todo.title} - {todo.status ? "Done" : "Not done"} {" "}
    <button onClick={()=>handleStatus(todo.id)}>Toggle</button>
    
    </div>
);
};