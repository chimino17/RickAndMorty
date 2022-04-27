// import React, { createContext, useState } from "react";

// export const DataContext = createContext();

// const favoritos = {
//   favorites: [],
// };
// export const AppContext = ({ children }) => {
//   const [data, setData] = useState(favoritos);

//   return <DataContext value={(data, setData)}>{children}</DataContext>;
// };

import React from "react";

const AppContext = React.createContext({});

export default AppContext;
