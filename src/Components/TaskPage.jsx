import "../Components/Style.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const userID = JSON.parse(localStorage.getItem("USER__ID"));
// console.log("ID holo....", userID);

const TaskPage = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [taskList, setTaskList] = useState([]);
  const [addNewTask, setAddNewTask] = useState("");

  let totalCounter;

  useEffect(() => {
    fetch(`http://localhost:8000/user/${userID}`)
      .then((res) => {
        const result = res.json();
        result.then((data) => {
          // console.log(data);
          setData(data);
          // forceUpdate()
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/user/${userID}`)
      .then((res) => {
        const result = res.json();
        result.then((total) => {
          // console.log(total);
          setTotal(total);
          // forceUpdate()
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setCurrentDate(new Date());
    // console.log(currentDate.toLocaleDateString());
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/user/${userID}`)
      .then((res) => {
        const result = res.json();
        result.then((taskList) => {
          // console.log(taskList, "Task LIST...");
          setTaskList(taskList);
          // forceUpdate()
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  totalCounter = total && total.taskOfTheDay;
  // console.log(totalCounter.length, "Total Holo");

  const handleAddNewTask = async(e) => {
    e.preventDefault();
    console.log(addNewTask);
    let userData = {
      taskOfTheDay: addNewTask
    }

    const res = await fetch(`http://localhost:8000/user/${userID}`, {
      method : "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userData)
    })
   const result = await res.json();
   console.log(result);
   setData(data);
   setTotal(total);
   setTaskList(taskList);
  }

  return (
    <div>
      <div
        style={{
          border: "2px solid teal",
          width: "300px",
          margin: "auto",
          marginTop: "30px",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h3>Hello !!</h3>
          <Link to={"/"}>
            <h3>Logout</h3>
          </Link>
        </div>
        <h1>{data.userName}</h1>
        <p>Good to see you !</p>
        <p>
          Your total task for today is - <strong>{totalCounter.length}</strong>
        </p>
        <h5>
          Task for :-{" "}
          {currentDate.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </h5>
        <div id="taskListDiv">
          {taskList && taskList.taskOfTheDay}

          {/*         
            {
              taskList && taskList.map((el) =>(
                <li>{el.taskOfTheDay}</li>
              ))
            } 
        */}
        </div>
        <form action="" onSubmit={handleAddNewTask}>
          <input type="text" placeholder="Add Task Here" id="addTaskInput" value={addNewTask} onChange={(e) => setAddNewTask(e.target.value)}  />
          <input type="submit" value="Add New Task" />
        </form>
      </div>
    </div>
  );
};

export default TaskPage;
