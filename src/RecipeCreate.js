import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // To create a recipe entry, your app will need to have a form
  //  with input fields for the name of the dish, the cuisine it belongs to, 
  //  and an URL that points to a picture of the dish.
  //   Use <textarea> for the ingredients and preparation.
  //    For the tests to pass, use the following names for your inputs: 
  //    <input name="name">, <input name="cuisine">, <input name="photo">, 
  //    <textarea name="ingredients"> and <textarea name="preparation">.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "" ,
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});
  const handleformChange = ({target})=>{
    setFormData({...formData, [target.name]: target.value,});
  };

  const handleCreate =(event)=>{
    event.preventDefault();
    createRecipe(formData);
    console.log(event);
    console.log(formData);
    setFormData({...initialFormState});

  }

  return (
    <form name="create" onSubmit={handleCreate} >
      <table>
        <tbody>
          <tr>
            <td>
            <input id="name" name="name" type="text" placeholder="Name"
              onChange={handleformChange} value={formData.name}
                   />
            </td>
            <td>
            <input id="cuisine" name="cuisine" type="text" placeholder="Cuisine"
              onChange={handleformChange} value={formData.cuisine}
                   />
            </td>
            <td>
            <input id="photo" name="photo" type="url" placeholder="URL"
              onChange={handleformChange} value={formData.photo}
                   />
            </td>
            <td>
            <textarea id="ingredients" name="ingredients"  placeholder="Ingredients"
              onChange={handleformChange} value={formData.ingredients}
                   />
            </td>
            <td>
            <textarea id="preparation" name="preparation"  placeholder="Preparation"
              onChange={handleformChange} value={formData.preparation}
                   />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
