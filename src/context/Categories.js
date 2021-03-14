import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear context

export const CategoriesContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriesProvider = (props) => {

// crear el state del Context
const [categories, setCategories] = useState([]);

// ejecutar el llamado a la api
useEffect(() => {
    const getCategorias = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const categories = await axios.get(url);

      setCategories(categories.data.drinks);
    }
    getCategorias();
}, []);

  return (
    <CategoriesContext.Provider
        value={{
            categories
        }}
    >
        {props.children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider;

