import React from "react";

import "./Header.css";
import { Button } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header-buttons">
        <Button variant="outlined" color="primary">
          Показать все
        </Button>
        <Button variant="contained" color="primary">
          Добавить товар
        </Button>
        <Button variant="contained" color="primary">
          Добавить категорию
        </Button>
      </div>
    </div>
  );
};
export default Header;
