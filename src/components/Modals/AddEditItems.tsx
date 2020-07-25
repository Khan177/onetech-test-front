import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { ItemService } from "../../service";
import {
  getCategories,
  toggleAddItem,
  getItems,
  resetItemToEdit,
  setNextId,
} from "../../store/actions";
import { connect } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

const DialogComponent = ({ item, categories, open }: any) => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: { ...item },
    validationSchema: Yup.object({
      name: Yup.string().required("Введите название товара"),
      buyPrice: Yup.number().required("Введите цену закупа"),
      price: Yup.string().required("Введите цену"),
    }),
    onSubmit: (values) => {
      ItemService.post({ ...values, id: item.id }).then((res) => {
        dispatch(getItems());
        ItemService.getNextId().then((res: any) => {
          dispatch(setNextId(res.data));
        });
      });
      dispatch(toggleAddItem());
      dispatch(resetItemToEdit());
      form.setTouched({ name: false, buyPrice: false, price: false });
    },
  });
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <Dialog
      open={open}
      onBackdropClick={() => {
        dispatch(toggleAddItem());
        dispatch(resetItemToEdit());
      }}
      onEnter={() => {
        form.setValues({ ...item });
      }}
    >
      <DialogTitle>Добавить/Изменить Товар</DialogTitle>
      <DialogContent>
        <form onSubmit={form.handleSubmit}>
          <TextField
            name="category"
            select
            label="Категория"
            value={form.values.category}
            onChange={form.handleChange}
            variant="outlined"
          >
            {categories.map((category: string) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginTop: "20px" }}
            label="Название"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            error={form.touched.name && Boolean(form.errors.name)}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "20px" }}
            label="Цена/Закуп"
            name="buyPrice"
            value={form.values.buyPrice}
            onChange={form.handleChange}
            error={form.touched.buyPrice && Boolean(form.errors.buyPrice)}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "20px" }}
            label="Цена"
            name="price"
            value={form.values.price}
            onChange={form.handleChange}
            error={form.touched.price && Boolean(form.errors.price)}
            variant="outlined"
          />
          <Button
            style={{ marginTop: "20px" }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Сохранить
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
const mapStateToProps = (state: any) => ({
  categories: state.categories,
  item: state.itemToAddEdit,
  open: state.isItemAdding,
});

export default connect(mapStateToProps)(DialogComponent);
