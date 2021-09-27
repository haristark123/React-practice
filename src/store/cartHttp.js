import { uiAction } from "./uiSlice";
import { cartActions } from "./cartSlice";


export const sendCartData =  (cart) => {
  return async (dispatch) => {
    dispatch(uiAction.setLoading(true));
    dispatch(
      uiAction.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-foodstore-default-rtdb.firebaseio.com/books.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "Success",
          title: "Success",
          message: "Cart Data Sent completed",
        })
      );
    //   dispatch(uiAction.setLoading(false));
    } catch (err) {
      dispatch(
        uiAction.showNotification({
          status: "Failed",
          title: "Failed",
          message: "Cart Data Sent Failed",
        })
      );
      dispatch(uiAction.setLoading(false));
    }
  };
};

export const FetchCartData =  () => {
  return async (dispatch) => {
    dispatch(uiAction.setLoading(true));
    const getRequest = async () => {
      const response = await fetch(
        "https://react-foodstore-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Fething Data is failed");
      }
      const data=await response.json();
      return data
    };
    try{
        const cart=await getRequest()
        dispatch(cartActions.replaceCartItems({
            items:cart.items || [],
            totalQuantity:cart.totalQuantity
        }))
        dispatch(uiAction.setLoading(false))
    }
    catch (err){
        dispatch(
            uiAction.showNotification({
              status: "Failed",
              title: "Failed",
              message: "Cart Data Fetch Failed",
            })
          );
        dispatch(uiAction.setLoading(false))
        console.log(err);

    }
  };
};
