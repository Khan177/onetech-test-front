import React, { useState } from "react";

import { getCategories } from "../../store/actions";
import { useDispatch } from "react-redux";
import { CategoryService } from "../../service";
import { connect } from "react-redux";
import { toggleAddCategory } from "../../store/actions";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";

const DialogComponent = ({ open }: any) => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");
  const handleAddCategory = () => {
    CategoryService.post(newCategory).then((res) => {
      dispatch(getCategories());
      dispatch(toggleAddCategory());
    });
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Добавить категорию</DialogTitle>
      <DialogContent>
        <TextField
          required
          label="Название"
          value={newCategory}
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddCategory}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = (state: any) => ({ open: state.isCategoryAdding });

export default connect(
  mapStateToProps,
  { toggleAddCategory }
)(DialogComponent);
