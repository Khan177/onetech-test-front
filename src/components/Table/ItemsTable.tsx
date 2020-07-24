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
} from "@material-ui/core";
import { ItemService } from "../../service";
import { getItems } from "../../store/actions";
import { Item } from "../../types/item.types";

import { Delete } from "@material-ui/icons";

const ItemsTable = ({ items }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <div className="table">
      <TableContainer>
        <Table aria-label="simple table">
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
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                  >
                    <Delete />
                  </IconButton>
                  {item.category}
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
                      ItemService.delete(item.id);
                      dispatch(getItems());
                    }}
                  >
                    Удалить
                  </Button>
                  <Button variant="contained" color="primary">
                    Изменить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  items: state.items,
});
export default connect(mapStateToProps)(ItemsTable);
