import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

import { API_ID, API_KEY, API_URL } from "../utils/constants";

export const RecetasContext = createContext(); // crear context

// Funcion provider

const RecetasProvider = (props) => {

  const [recipes, setRecipes] = useState([]); // Guardar resultado de la consulta a api

  const [recipe, setRecipe] = useState({
    // q: '',
    // mealsType: []
  });

  const [request, setRequest] = useState(false);

  useEffect(() => {

    if(request) {
      console.log(recipe);
      let mealTypes = '';
      if (recipe.mealType.length) {
        recipe.mealType.forEach(element => {
          mealTypes += `&mealType=${element}`;
        });
        
      }
      const getRecipe = async () => {
        let url = `${API_URL}?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=${recipe.food}`;
        // console.log(url);
        if (mealTypes) {
          url += mealTypes;
        }
        const result = await axios.get(url);
        // console.log(result);
        // console.log(result.data.hits);
        setRecipes(result.data.hits);
        setRequest(false);
      }

      getRecipe();
    }
    
  }, [recipe])

  return(
    <RecetasContext.Provider
    // Variables y valores que tendra disponible el provider
    value={{

      recipes,
      setRecipe, setRequest
    }}>
      {/* Para que pueda ser utilizados por los hijos */}
      {props.children} 
    </RecetasContext.Provider>
  )
}

export default RecetasProvider;