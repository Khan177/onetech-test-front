import React, { useEffect } from "react";

import "./Header.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ItemService } from "../../service";
import { getItems } from "../../store/actions";

import { setNextId } from "../../store/actions";

import { toggleAddItem, toggleAddCategory } from "../../store/actions";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ItemService.getNextId().then((res: any) => {
      dispatch(setNextId(res.data));
    });
  }, [dispatch]);
  return (
    <div className="header">
      <div className="header-buttons">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch(getItems())}
        >
          Показать все категории
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(toggleAddItem());
          }}
        >
          Добавить товар
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(toggleAddCategory());
          }}
        >
          Добавить категорию
        </Button>
      </div>
    </div>
  );
};
export default Header;
