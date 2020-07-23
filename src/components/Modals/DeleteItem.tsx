import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

const DialogComponent = () => {
  return (
    <Dialog open={true}>
      <DialogTitle>Хотите удалить категорию?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Все товары этой категории будут помечены "Без категории"
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Да</Button>
        <Button color="primary">Нет</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
