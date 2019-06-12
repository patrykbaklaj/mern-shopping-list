import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./componentns/AppNavbar";
import ShoppingList from "./componentns/ShoppingList";

function App() {
    return (
        <div className="App">
            <AppNavbar />
            <ShoppingList />
            <h1>Hello</h1>
        </div>
    );
}

export default App;
