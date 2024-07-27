//* Thunk Aksiyonu

import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getProducts = (restId) => (dispatch) => {
  // Reducera yüklenmenin başladığını bildiriyoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  api
    .get(`/products?restaurantId=${restId}`)
    // İstek başarılı olursa reducera verileri gönderiyoruz
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    // İstek başarısız olursa reducera hata mesajını gönderiyoruz
    .catch((err) =>
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      })
    );
};
