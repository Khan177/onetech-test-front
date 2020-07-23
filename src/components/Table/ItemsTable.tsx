import React from "react";

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

import { Delete } from "@material-ui/icons";

const ItemsTable = () => {
  function createData(
    category: any,
    id: any,
    name: any,
    buyPrice: any,
    price: any
  ) {
    return { category, id, name, buyPrice, price };
  }

  const rows = [
    createData("Первая", 1, "khan", 500, 1000),
    createData("Первая", 1, "khan", 500, 1000),
  ];
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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                  >
                    <Delete />
                  </IconButton>
                  {row.category}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.buyPrice}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
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
export default ItemsTable;
