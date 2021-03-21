import React from 'react';
import {ReactComponent as Clock} from "../assets/svg/clock-fill.svg";
import {ReactComponent as People} from "../assets/svg/people-fill.svg";
import {ReactComponent as Meal} from "../assets/svg/meal-fill.svg"

const Recipe = ({recipeElement, id}) => {
  // console.log(id)
  const {recipe: {image, ingredientLines, label, mealType, totalTime} } = recipeElement;

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{label}</h2>
        <img className="card-img-top img-thumbnail img-fluid p-3" src={image} alt={label}/>
        <div className="card-body">
          <button type="button" className="btn btn-block btn-primary" data-toggle="modal" data-target={`#modalRecipe${id}`} >
            Ver Receta
          </button>

          <div className="modal fade" id={`modalRecipe${id}`} tabIndex="-1" aria-labelledby={`modalRecipe${id}`} aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`modalRecipe${id}`} >{label}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img className="img-fluid rounded mx-auto d-block" src={image} alt={label}/>

                  <div className="list-group list-group-horizontal my-3">
                    <span className="list-group-item flex-fill"><People /> <span>{recipeElement.recipe.yield} Comensales</span></span>
                    <span className="list-group-item flex-fill"><Clock /> <span>{totalTime} Minutos</span></span>
                    {mealType ? (<span className="list-group-item flex-fill"><Meal /> <span>{mealType[0]}</span></span>) : null} 
                  </div>

                  <h6 className="my-3">Ingredientes:</h6>
                  <ul>
                    {ingredientLines.map((ingredient, index) => (
                      <li key={index}>{ingredient}.</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Recipe;
