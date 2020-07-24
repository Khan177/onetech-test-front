import React from "react";

import { useDispatch } from "react-redux";
import { ItemService } from "../../service";
import { connect } from "react-redux";
import { getItems, getCategories } from "../../store/actions";
import { Dialog, DialogActions, Button, DialogTitle } from "@material-ui/core";

const DialogComponent = ({ item, open }: any) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    ItemService.delete(item.id);
    dispatch(getCategories());
    dispatch(getItems());
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Точно удалить товар {item.name}?</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={handleDeleteItem}>
          Да
        </Button>
        <Button color="primary">Нет</Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = (state: any) => ({
  item: state.itemToDelete,
  open: state.isItemDeleting,
});

export default connect(mapStateToProps)(DialogComponent);
