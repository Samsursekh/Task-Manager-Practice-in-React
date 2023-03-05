import React from 'react'

const TaskPage = (props) => {
  console.log("Props holo....", props);
  return (
    <div>
      <h3>TASK PAGE</h3>
      {
        props.ID
      }
    </div>
  )
}

export default TaskPage