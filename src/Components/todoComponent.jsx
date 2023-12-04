import { useEffect, useState } from "react";
import style from "../Styles/todo.module.css";

const TodoComponent = () => {
  const initialValue = JSON.parse(localStorage.getItem("user_task_array")) || [
    { text: "Task 2", complete: false },
    { text: "Task 2", complete: false },
  ];

  const [myTask, setMyTask] = useState(initialValue);

  const [activeTodosCount, setActiveValue] = useState(myTask.length);

  const handleAddTask = () => {
    if (item) {
      let arr = [...myTask, { text: item, complete: false }];
      setMyTask(arr);
      setItem("");
    }
  };

  const [item, setItem] = useState("");

  useEffect(() => {
    let arr = [...myTask];
    let newArr = arr.filter((each) => !each.complete).length;
    let stringedData = JSON.stringify(myTask);
    localStorage.setItem("user_task_array", stringedData);

    setActiveValue(newArr);
  }, [myTask]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  const handleToggleComplete = (index) => {
    let arr = [...myTask];
    arr[index].complete = !arr[index].complete;

    setMyTask(arr);

    let activeTodosCount = arr.filter((each) => !each.complete);
    setActiveValue(activeTodosCount.length);
  };

  function handleCleanTask() {
    let arr = [...myTask];
    let car = arr.filter((a) => {
      return a.complete == false;
    });
    setMyTask(car);
  }




  function handleAllTask() {
//     let arr = [...myTask];
//     let vegi = [];
    
//     arr.forEach((bc)=>{
//         if(bc.complete == true){
//           vegi.push(bc);
//         }

//         if(bc.complete == false){
//           vegi.push(bc);
//         }

//     });

//     console.log(fruit);

// const [fruit, setMyTask1] = useState('car');

//     setMyTask1(vegi);
//     setMyTask(fruit);
 }




  function handleComTask() {
    let arr = [...myTask];
    let comT = arr.filter((a) => {
      return a.complete == true;
    });
    setMyTask(comT);
  }

  function handlePenTask() {
    let arr = [...myTask];
    let penT = arr.filter((a) => {
      return a.complete == false;
    });
    setMyTask(penT);
  }

  // ----------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className={style.pngkv}>
        {" "}
        <h1 className={style.AppHeading}>Task Reminder App </h1>
        <input
          className={style.UserInput}
          type="text"
          placeholder="Add items here ..."
          onChange={handleChange}
          value={item}
        />
        {/* ========================================================================= */}
        {/* <button id="MyBtn2">M</button> */}
        <div className={style.dropdown}>
          <button className={style.MyBtn2}>
            F
          </button>
          <div className={style.dropdownContent}>
            <a className={style.allTask} onClick={handleAllTask}>
              All
            </a>
            <a className={style.penTask} onClick={handlePenTask}>
              Active
            </a>
            <a className={style.comTask} onClick={handleComTask}>
              Complete
            </a>
          </div>
        </div>
        {/* ======================================================================= */}
        <button className={style.MyBtn1} onClick={handleCleanTask}>
          C
        </button>
        <button className={style.MyBtn} onClick={handleAddTask}>
          +
        </button>
        <ul className={style.MyList}>
          {myTask.map((task, index) => (
            <li className={style.MyListItems}>
              <input
                className={style.ListItemCheckbox}
                type="checkbox"
                checked={task.complete}
                onChange={() => {
                  handleToggleComplete(index);
                }}
              />

              <span
                className={style.MySpan}
                style={{
                  textDecoration: task.complete ? "line-through " : "none",
                  color: task.complete ? "rgba(0, 0, 0, 0.4)" : "black",
                }}
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
        <p className={style.MyActiveto}>
          Remaining Task :{" "}
          <span className={style.MyFav}>{activeTodosCount}</span>
        </p>
      </div>
    </>
  );
};

export default TodoComponent;
