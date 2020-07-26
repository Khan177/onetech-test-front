import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import "./ItemsTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import {
  toggleDeleteItem,
  getItems,
  getItemsByCategory,
  setItemToDelete,
  toggleDeleteCategory,
  setCategoryToDelete,
  setItemToEdit,
  toggleAddItem,
} from "../../store/actions";
import { Item } from "../../types/item.types";

import { Delete } from "@material-ui/icons";

const ItemsTable = ({ items, loading }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <div className="table">
      {(loading && <CircularProgress />) || (
        <TableContainer>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => dispatch(getItems())}
          >
            Показать все категории
          </Button>
          <Table aria-label="simple table" style={{ maxWidth: "80vw" }}>
            <TableHead>
              <TableRow>
                <TableCell>Категория</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Название товара</TableCell>
                <TableCell align="right">Цена/Закуп</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="center">Опции</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: Item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.category !== "Без названия" && (
                      <IconButton
                        aria-label="delete"
                        color="secondary"
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                          dispatch(setCategoryToDelete(item.category));
                          dispatch(toggleDeleteCategory());
                        }}
                      >
                        <Delete />
                      </IconButton>
                    )}
                    <Button
                      color="primary"
                      onClick={() => {
                        dispatch(getItemsByCategory(item.category));
                      }}
                      style={{ textTransform: "none" }}
                    >
                      {item.category}
                    </Button>
                  </TableCell>
                  <TableCell align="right">{item.id}</TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.buyPrice}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        dispatch(setItemToDelete(item));
                        dispatch(toggleDeleteItem());
                      }}
                    >
                      Удалить
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        dispatch(setItemToEdit(item));
                        dispatch(toggleAddItem());
                      }}
                    >
                      Изменить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  items: state.items,
  loading: state.loadingOfItems,
});
export default connect(mapStateToProps)(ItemsTable);
