import { useEffect, useState } from "react"

export const Todos=()=>{

    const [todos,setTodos]=useState([])
    const [text,setText]=useState("")

    useEffect(()=>{
        fetch("http://localhost:8080/todos")
          .then((d)=>
           d.json()
)
.then((data)=>{
  setTodos(data)
})
    },[])

    return (<div>
        <input onChange={(e)=>setText(e.target.value)} type="text"  placeholder="Entertodos"/>
        <button onClick={()=>{
            const payload={
                title:text,
                status:false
            };
            fetch("http://localhost:8080/todos",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(payload)
            }).then(     fetch("http://localhost:8080/todos")
            .then((d)=>
             d.json()
  )
  .then((data)=>{
    setTodos(data)
  }))

            // axios.post("http://localhost:8080/todos",paylod)
        }}  >Add todo</button>
        {todos.map((t)=>(
            <div> {t.title}</div>
        ))}
    </div>)
}