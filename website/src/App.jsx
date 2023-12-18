import "./styles/globalstyles.scss";
import React, { useContext } from "react";
import { RouterMain } from "./router";
import { Loading } from "./components/Loading";

function App() {

  return (
    <>
      <RouterMain />
    </>
  )
}

export default App