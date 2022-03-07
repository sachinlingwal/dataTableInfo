import { useEffect, useState } from "react";
import classes from "./DataTableInfo.module.css";

const DataTableInfo = (props) => {
  const { name, count, id, changeColor, selected } = props;
  useEffect(() => {
    changeColor(1);
  }, []);
  return (
    <div
      className={classes.container}
      onClick={() => changeColor(id)}
      style={{
        color: selected === id ? "white" : "#77a2d3",
        backgroundColor: selected === id ? "#4770A4" : "white",
        zIndex: selected === id ? 10 : "",
      }}
    >
      <p className={classes.infoName}>{name}</p>
      {count ? (
        <div className={classes.count}>
          <p>{count}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DataTableInfo;
