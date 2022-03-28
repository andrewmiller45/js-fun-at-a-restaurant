
function nameMenuItem(foodChoice) {
  return `Delicious ${foodChoice}`
}

function createMenuItem(named, priced, time) {
  return {name: named, price: priced, type: time}
}

//there are two parameters stated, one given via 'ingredients'
//the other looks to be manually added, so create a parameter `topping`
//add a push function to add to the end of the array.
//(array.push(new value/topping))
//if the topping is not in the array, then add it.
//otherwise, do not add

function addIngredients(topping, ingredients) {

  if (ingredients.includes(topping) === false) {

    return ingredients.push(topping);
    }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price * .9;
}
//return the object
function createRecipe(name, toppings, time) {

  return {
    title: name,
    ingredients: toppings,
    type: time
  }

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
