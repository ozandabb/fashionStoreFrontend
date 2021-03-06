import { GET, GET_CART } from "./types";
import axios from "axios";
import Config from "../controllers/Config";
import User from "../controllers/User";

export const addtocart = (data, userid) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      axios
        .post(`${Config.host}${Config.port}/cart/insert`, {
          userid: userid,
          productid: data.product_id,
          quantity: data.quantity,
          selected_color: data.selected_color ? data.selected_color : "",
          selected_size: data.selected_size,
        })
        .then((result) => {
          // console.log( "API" , result.data);
          dispatch(getCart(userid));
          return resolve({
            type: "success",
            message: "Item Added Successfully",
          });
        })
        .catch((error) => {
          console.log(error);
          reject({ type: "failed", message: "failed" });
        });
    }).catch((err) => {
      throw err;
    });
};

export const updateCartItem = (data, userid) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      axios
        .patch(`${Config.host}${Config.port}/cart/update/${data.id}`, {
          quantity: data.quantity,
        })
        .then((result) => {
          // console.log( "API" , result.data);
          dispatch(getCart(userid));
          return resolve({
            type: "success",
            message: "Item Update Successfully",
          });
        })
        .catch((error) => {
          console.log(error);
          reject({ type: "failed", message: "failed" });
        });
    }).catch((err) => {
      throw err;
    });
};

export const deleteCartItem = (id, userid) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      axios
        .delete(`${Config.host}${Config.port}/cart/delete/${id}`)
        .then((result) => {
          console.log("API", result.data);
          dispatch(getCart(userid));
          return resolve({
            type: "success",
            message: "Item Delete Successfully",
          });
        })
        .catch((error) => {
          console.log(error);
          reject({ type: "failed", message: "failed" });
        });
    }).catch((err) => {
      throw err;
    });
};

export const cleartCart = (userid) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      axios
        .delete(`${Config.host}${Config.port}/cart/clear/${userid}`)
        .then((result) => {
          console.log("API", result.data);
          dispatch(getCart(userid));
          return resolve({
            type: "success",
            message: "Cart Clear Successfully",
          });
        })
        .catch((error) => {
          console.log(error);
          reject({ type: "failed", message: "failed" });
        });
    }).catch((err) => {
      throw err;
    });
};

export const getCart = (userid) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      axios
        .get(`${Config.host}${Config.port}/cart/get/${userid}`)
        .then((result) => {
          // console.log( "API" , result.data);
          dispatch({ type: GET_CART, payload: result.data.data });
          return resolve({ type: "success", message: "get cart Successfully" });
        })
        .catch((error) => {
          console.log(error);
          reject({ type: "failed", message: "failed" });
        });
    }).catch((err) => {
      throw err;
    });
};
