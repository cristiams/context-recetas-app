import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecetasContext } from '../context/RecetasContext';

const ListRecipes = () => {

  // extraer las recetas
  const { recipes } = useContext(RecetasContext);

  console.log(recipes);

  return ( 
    <div className="row mt-5">
      {recipes.map((recipe, index) => (
        <Recipe 
          key={index}
          recipeElement={recipe}
          id={index}
        />
      ))}
    </div>
  );
}
 
export default ListRecipes;