import React, { useState } from "react";
import DataTableInfo from "./DataTableInfo";

import classes from "./DataTableHeader.module.css";

const DataTableHeader = () => {
  //fake Data
  const Data = [
    {
      id: 1,
      name: "Organization Info",
    },
    { id: 2, name: "Users", count: "40" },
    { id: 3, name: "ISV Tenants", count: "80" },
    { id: 4, name: "Customer Tenants", count: "20" },
    { id: 5, name: "Organization Admin", count: "05" },
    { id: 6, name: "Users", count: "40" },
    { id: 7, name: "ISV Tenants", count: "80" },
    { id: 8, name: "Customer Tenants", count: "20" },
    { id: 9, name: "Organization Admin", count: "05" },
  ];

  //state for background and fontcolor change
  const [selected, setSelected] = useState("");

  const changeColor = (id) => {
    setSelected(id);
  };

  return (
    <div className={classes.container}>
      {Data.map(({ name, id, count }) => (
        <DataTableInfo
          name={name}
          key={id}
          id={id}
          count={count}
          changeColor={changeColor}
          selected={selected}
        />
      ))}
    </div>
  );
};
export default DataTableHeader;
