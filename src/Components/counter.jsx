import { useState } from "react";
import style from "../Styles/counter.module.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  function handleAddClick() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleSubtractClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className={style.cc1}>
        <h1 className={style.heading}>Counter Component</h1>
        <h2 className={style.counterPreview}> Count = <div className={style.digS}>  {count} </div> </h2>

        {count < 10 && (
          <button className={style.comBtn1} onClick={handleAddClick}>
            Add Count
          </button>
        )}
        {count > 0 && (
          <button className={style.comBtn2} onClick={handleSubtractClick}>
            Subtract Count
          </button>
        )}

        {count == 0 ? <p className={style.war1}>You have reached the minimum limit</p> : <></>}
        {count == 10 ? <p className={style.war2}>You have reached the maximum limit</p> : <></>}
      </div>
    </>
  );
};

export default Counter;
