// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
//reference--https://www.youtube.com/watch?v=je3FTTunyp4
// import Axios from "axios";
// import { React, useEffect, useState } from "react";
// import Navbar from "./navigation/Navbar";

// export default function App() {
//   const [charData, setCharData] = useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       Axios.get("https://thronesapi.com/api/v2/Characters").then((res) => {
//         setCharData(res.data);
//       });
//     };
//     fetchData();
//   }, []);

//   //console.log(fam);
//   return <Navbar family={charData} />;
// }

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// import navigation, view, and components
import Navbar from "./navigation/Navbar";
import Home from "./views/Home";
import Search from "./views/Search";
import Houses from "./views/Houses";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Houses" element={<Houses />} />
        </Routes>
      </div>
    </>
  );
}
