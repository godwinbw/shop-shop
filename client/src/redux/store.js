import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

import rootReducer from "../redux/reducers";

// create the redux store
const reduxStore = createStore(rootReducer);

// create the state & dispatch function
//
// we are packaging these up in this way to make "drop-in replacment" of the new
// redux store instead of the old react.context store easier - this is the same way the old code
// packaged up the state & dispatch accessors
//
const useReduxStore = () => {
  // create accessor for state
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return { state, dispatch };
};

export { reduxStore, useReduxStore };
