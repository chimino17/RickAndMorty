import React, { useContext } from "react";

import AppContext from "../context/AppContext";

export default function Favorites() {
  const { state, removeFromfav } = useContext(AppContext);

  const handleClick = (favorite) => {
    removeFromfav(favorite);
  };
  // console.log(state);
  return (
    <div className="App">
      <h2>Favorites</h2>
      <div className="grid-container">
        {state.favoritos.map((favorite) => (
          <div key={favorite.id} className="card">
            <img className="character__img" src={favorite.image} alt="" />
            <div className="product-info">
              <h2>{favorite.name}</h2>
              <p>
                <span className={favorite.status}>{favorite.status}</span> -{" "}
                <span>{favorite.species}</span>
                <span className="red"> / </span>Gender:{" "}
                <span>{favorite.gender}</span>
              </p>
              <p>
                Location: <span>{favorite.location.name}</span>
              </p>
              <p>
                Origin: <span>{favorite.origin.name}</span>
              </p>
              <button
                type="button"
                className="delete"
                onClick={() => handleClick(favorite)}
              >
                Remove from favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
