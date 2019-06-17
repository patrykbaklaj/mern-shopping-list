import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./componentns/AppNavbar";
import ShoppingList from "./componentns/ShoppingList";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar />
                <ShoppingList />
                <h1>Hello</h1>
            </div>
        </Provider>
    );
}

export default App;
