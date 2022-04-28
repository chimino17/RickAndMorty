import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addTofav = (favorite) => {
    setState({
      ...state,
      favoritos: [...state.favoritos, favorite],
    });
  };

  const removeFromfav = (payload) => {
    setState({
      ...state,
      favoritos: state.favoritos.filter((items) => items.id !== payload.id),
    });
  };

  const removeDouble = (favorite) => {
    removeFromfav(favorite);
    addTofav(favorite);
  };

  return {
    state,
    addTofav,
    removeFromfav,
    removeDouble,
  };
};
export default useInitialState;
