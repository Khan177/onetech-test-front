import React from "react";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { CategoryService } from "../../service";
import { getItems, getCategories } from "../../store/actions";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

const DialogComponent = ({ category, open }: any) => {
  const dispatch = useDispatch();
  const handleDeleteCategory = () => {
    CategoryService.delete(category).then((res) => {
      dispatch(getItems());
      dispatch(getCategories());
      open = false;
    });
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Хотите удалить категорию?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Все товары этой категории будут помечены "Без категории"
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleDeleteCategory}>
          Да
        </Button>
        <Button color="primary">Нет</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: any) => ({
  category: state.categoryToDelete,
  open: state.isCategoryDeleting,
});

export default connect(mapStateToProps)(DialogComponent);
