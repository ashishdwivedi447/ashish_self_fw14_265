import React from 'react'

const TodoItem = ({data}) => {
  return (
    <div>
        <div key={data.id}>{data.title}</div>
    </div>
  )
}

export default TodoItem