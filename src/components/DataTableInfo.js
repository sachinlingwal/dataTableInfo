import { useState } from "react";
import classes from "./DataTableInfo.module.css";

const DataTableInfo = (props) => {
  const { name, count, id } = props;
  // console.log(id);
  const [selected, setSelected] = useState("");

  // const [toggle, setToggle] = useState(false);
  // const [color, setColor] = useState("white");

  // const handleToggle = () => {
  //   setColor("#4770A4");
  //   setToggle(!toggle);
  // };
  // console.log(toggle);

  const handleChange = (id) => {
    setSelected(id);
  };

  console.log(selected);
  console.log(id);

  return (
    <div
      className={classes.container}
      // onClick={handleToggle}
      // style={{ backgroundColor: toggle && color }}
      // onClick={() => handleChange(id)}
      onClick={() => handleChange(id)}
      style={{
        backgroundColor: selected === id ? " #4770A4" : "white",
        color: selected === id ? "black" : "blue",
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
