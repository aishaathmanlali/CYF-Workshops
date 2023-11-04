// Predict and explain...
// Try predicting and explaining what will get logged to the console when the code runs
// To check your prediction, play computer using the Python Visualiser: https://pythontutor.com/render.html#mode=display


const ingredients = ["olive oil","tomatoes",'garlic','onion', 'carrot'];
let ingredientsCopy = ingredients;
ingredientsCopy.push('pasta','salt','pepper');
const otherRecipe = ["olive oil","tomatoes",'garlic','onion', 'carrot','pasta','salt','pepper'];

console.log(ingredients === ingredientsCopy);
console.log(ingredients === otherRecipe);
console.log(otherRecipe === ingredientsCopy);
console.log(otherRecipe.length === ingredients.length);
/*
console.log(ingredients === ingredientsCopy);
This is true because they are stored in the same path.

console.log(ingredients === otherRecipe);
This is false because they are stored in different paths.

console.log(otherRecipe === ingredientsCopy);
This is false because they are stored in different paths.

console.log(otherRecipe.length === ingredients.length);
This is true because they have same number of items inside the arrays.