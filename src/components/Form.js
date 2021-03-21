import React, {useState, useContext} from 'react';
import Error from './Error';

import {RecetasContext} from "../context/RecetasContext";

const Form = () => {

  const [error, setError] = useState(false);

  const [ search, setSearch ] = useState({
    food: '',
    mealType: []
  });

  const {food,mealType} = search;

  const {setRecipe, setRequest} = useContext(RecetasContext);

  // función para leer los contenidos
  const getDataForm = e => {
    
    if (e.target.type === 'checkbox') {

      let mealsPrevious = mealType;

      if(e.target.checked) {

        // console.log(e.target.name,e.target.value,e.target.checked);

        mealsPrevious.push(e.target.value);

        setSearch({
          ...search,
          mealType : mealsPrevious
        })

        // console.log(search);
      }
      else {

        // console.log(e.target.name,e.target.value,e.target.checked);

        let index = mealsPrevious.findIndex(el => el === e.target.value)

        mealsPrevious.splice(index,1)

        setSearch({
          ...search,
          mealType : mealsPrevious
        })

        // console.log(search);
      }
    }
    else {

      setSearch({
        ...search,
        [e.target.name] : e.target.value
      })
    }
  }

  const submitSearch = e => {

    e.preventDefault();

    if(food.trim() === '') {

      setError(true);
      return;
    }
    setError(false);
    setRecipe(search);
    setRequest(true);
  }

  return (
    <form className="col-12"
      onSubmit={submitSearch}
    >
      <div className="row">
        <div className="col-md-4 form-group">
          <input type="text" name="food" className="form-control" placeholder="Escribe tu ingrediente" 
          onChange={getDataForm}/>
        </div>
        <div className="col-md-4 form-group">
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" name="breakfast" className="custom-control-input" id="breakfast" value="Breakfast" 
              onChange={getDataForm}/>
              <label className="custom-control-label" htmlFor="breakfast">Breakfast</label>
            </div>            
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" name="lunch" className="custom-control-input" id="lunch" value="Lunch" 
              onChange={getDataForm}/>
              <label className="custom-control-label" htmlFor="lunch">Lunch</label>
            </div>            
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" name="dinner" className="custom-control-input" id="dinner" value="Dinner" 
              onChange={getDataForm}/>
              <label className="custom-control-label" htmlFor="dinner">Dinner</label>
            </div>            
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" name="snack" className="custom-control-input" id="snack" value="Snack" 
              onChange={getDataForm}/>
              <label className="custom-control-label" htmlFor="snack">Snack</label>
            </div>            
          </div>          
        </div>
        <div className="col-md-4 form-group">
          <input type="submit" className="btn btn-block btn-primary" value="Buscar Recetas" />
      </div>
      </div>
      { error ? <Error message="Agrega un término de búsqueda" /> : null }
    </form>
  )
}

export default Form
