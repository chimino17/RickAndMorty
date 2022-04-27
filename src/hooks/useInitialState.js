// import { useContext } from "react";
// import AppContext from "../context/AppContext";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => useContext(AppContext);

import { useState } from "react";
import initialState from "../initialState";
// import {includes} from 'react-lodash/lib/IsEmpty'

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addTofav = (payload) => {
    //
    setState({
      ...state,
      favoritos: [...state.favoritos, payload],
    });
  };
  const removeFromfav = (payload) => {
    //
    setState({
      ...state,
      favoritos: state.favoritos.filter((items) => items.id !== payload.id),
    });
  };

  return {
    state, //
    addTofav,
    removeFromfav,
  };
};
export default useInitialState;
