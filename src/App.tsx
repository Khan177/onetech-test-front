import React from "react";

import Header from "./components/Header/Header";
import ItemsTable from "./components/Table/ItemsTable";
import DeleteItem from "./components/Modals/DeleteItem";
import AddCategory from "./components/Modals/AddCategory";
import DeleteCategory from "./components/Modals/DeleteCategory";
import AddEditItems from "./components/Modals/AddEditItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsTable />
      <DeleteItem />
      <AddCategory />
      <DeleteCategory />
      <AddEditItems />
    </div>
  );
}

export default App;
