import React from "react";

import Header from "./components/Header/Header";
import ItemsTable from "./components/Table/ItemsTable";
import DeleteItem from "./components/Modals/DeleteItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsTable />
    </div>
  );
}

export default App;
