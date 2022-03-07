import React, { useState } from "react";
import ComB from "./ComB";
import "./ComA.css";
const Data = [
  {
    id: 1,
    name: "Organization Info",
  },
  { id: 2, name: "Users", count: "40" },
  { id: 3, name: "ISV Tenants", count: "80" },
  { id: 4, name: "Customer Tenants", count: "20" },
  { id: 5, name: "Organization Admin", count: "05" },
];

const ComA = () => {
  const [list, setLoadList] = useState({
    color: "#77A2D3",
    backgroundColor: "white",
    organization1: "false",
    organization2: "false",
    organization3: "false",
    organization4: "false",
    organization5: "false",
  });

  const handleListLoad = (list) => {
    setLoadList(list);
  };

  return (
    <div className="container">
      {Data.map((item) => {
        const { id, name, count } = item;
        return (
          <ComB
            key={id}
            name={name}
            count={count}
            handleListLoad={handleListLoad}
            setLoadList={setLoadList}
            list={list}
          />
        );
      })}
    </div>
  );
};

export default ComA;
