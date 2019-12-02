import { Store } from "../Store";
import { BTN_RQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../constants/actions";

export const reducer = (Store: Store = {}, action: any) => {
  const prevData = Store.data || [];
  switch (action.type) {
    case BTN_RQUEST:
      return {
        ...Store,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...Store,
        isLoading: false,
        data: [...prevData, action.payload]
      };
    case FETCH_FAILURE:
      return {
        ...Store,
        isLoading: false,
        error: Error
      };
  }
  return {
    ...Store
  };
};
