import classes from "./DataTableHeader.module.css";
import DataTableInfo from "./DataTableInfo";

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

const DataTableHeader = () => {
  return (
    <div className={classes.container}>
      {Data.map((item) => {
        const { id, name, count } = item;
        return <DataTableInfo key={name} name={name} count={count} id={id} />;
      })}
    </div>
  );
};

export default DataTableHeader;
