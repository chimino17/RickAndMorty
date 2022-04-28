import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useContext,
} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharaters";
import AppContext from "../context/AppContext";
import "./cardsContrainer.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Characters = () => {
  const [page, setPage] = useState(1);

  const API = `https://rickandmortyapi.com/api/character/?page=${page}`; //42 paginas

  const { state, addTofav, removeFromfav } = useContext(AppContext);
  // const fav=state;
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const characters = useCharacters(API);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  const handleClick = (character) => {
    if (!state.favoritos.includes(character)) {
      addTofav(character);
    } else {
      removeFromfav(character);
    }
  };

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={page < 42 ? true : false}
    >
      <div className="Characters">
        <h2>Favorites: {state.favoritos.length}</h2>
        <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <div className="grid-container">
          {filteredUsers.map((character) => (
            <div key={character.id} className="card">
              <img className="character__img" src={character.image} alt="" />
              <div className="product-info">
                <h2>{character.name}</h2>
                <p>
                  <span className={character.status}>{character.status}</span> -{" "}
                  <span>{character.species}</span>
                  <span className="red"> / </span>Gender:{" "}
                  <span>{character.gender}</span>
                </p>
                <p>
                  Location: <span>{character.location.name}</span>
                </p>
                <p>
                  Origin: <span>{character.origin.name}</span>
                </p>
                <button type="button" onClick={() => handleClick(character)}>
                  Add to favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Characters;
