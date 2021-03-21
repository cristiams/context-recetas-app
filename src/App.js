import React from 'react';

import Header from "./components/Header";
import Form from "./components/Form";
import ListRecipes from "./components/ListRecipes";

import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <RecetasProvider>
      <Header />
      <div className="container mt-5"
      >
        <div className="row">
          <Form />
        </div>

        <ListRecipes />
      </div>
    </RecetasProvider>
  );
}

export default App;
