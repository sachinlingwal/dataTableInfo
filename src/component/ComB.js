import React, { useState } from "react";
import "./ComB.css";

const ComB = (props) => {
  const { name, count, handleListLoad } = props;
  const [activeList, setActiveList] = useState({
    color: "#77A2D3",
    backgroundColor: "white",
    OrganizationInfo: "true",
    users: "false",
    ISV_Tenants: "false",
    CustomerTenants: "false",
    OrganizationAdmin: "false",
  });

  console.log(activeList);

  const OrganizationInfo = () => {
    const update = {
      color: "white",
      backgroundColor: "#4770A4",
      OrganizationInfo: "true",
      users: "false",
      ISV_Tenants: "false",
      CustomerTenants: "false",
      OrganizationAdmin: "false",
    };
    handleListLoad(update);
    setActiveList(update);
  };
  const users = () => {
    const update = {
      color: "white",
      backgroundColor: "#4770A4",
      OrganizationInfo: "false",
      users: "true",
      ISV_Tenants: "false",
      CustomerTenants: "false",
      OrganizationAdmin: "false",
    };
    handleListLoad(update);
    setActiveList(update);
  };
  const ISV_Tenants = () => {
    const update = {
      color: "white",
      backgroundColor: "#4770A4",
      OrganizationInfo: "false",
      users: "false",
      ISV_Tenants: "true",
      CustomerTenants: "false",
      OrganizationAdmin: "false",
    };
    handleListLoad(update);
    setActiveList(update);
  };
  const CustomerTenants = () => {
    const update = {
      color: "white",
      backgroundColor: "#4770A4",
      OrganizationInfo: "false",
      users: "false",
      ISV_Tenants: "false",
      CustomerTenants: "true",
      OrganizationAdmin: "false",
    };
    handleListLoad(update);
    setActiveList(update);
  };
  const OrganizationAdmin = () => {
    const update = {
      color: "white",
      backgroundColor: "#4770A4",
      OrganizationInfo: "false",
      users: "false",
      ISV_Tenants: "false",
      CustomerTenants: "false",
      OrganizationAdmin: "true",
    };
    handleListLoad(update);
    setActiveList(update);
  };

  return (
    <div
      onClick={OrganizationInfo}
      className={activeList.OrganizationInfo ? "container1" : "container2"}
    >
      <p className="infoName">{name}</p>
      {count ? (
        <div className="count">
          <p>{count}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ComB;
