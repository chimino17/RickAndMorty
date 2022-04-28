import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../contrainers/Home";
import Layout from "../components/Layout";
import NotFound from "../contrainers/NotFound";
import Favorites from "../contrainers/Favorites";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/RickAndMorty" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
