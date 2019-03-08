import React from "react";
import ReactDOM from "react-dom";
import "./firebase/firebaseSetup";

import Root from "./components/Root/Root.js";

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import AdvancedSearchProvider from "./contexts/AdvancedSearch/AdvancedSearch";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";
import HamburgerMenuContextProvider from "./contexts/HamburgerMenu/HamburgerMenuContext";

ReactDOM.render(
  <HamburgerMenuContextProvider>
  <AuthContextProvider>
    <AdvancedSearchProvider>
      <Root />
    </AdvancedSearchProvider>
  </AuthContextProvider>
  </HamburgerMenuContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
