function createRestaurant(businessName) {


  return pizzaRestaurant = {
    name: businessName,
    menus: {
        breakfast: [],
        lunch: [],
        dinner: []
    }
  }
}
//bracket notation is used when we are being dynamic

function addMenuItem(pizzaRestaurant, item) {

//if the name is a duplicate, skip.
//otherwise add it to correct menu

    if (item.type === "breakfast") {

      var breakfastMenu = pizzaRestaurant.menus.breakfast;

      // Check each item in breakfastMenu
      // to see if it has same name as input item
      var hasDuplicate = false;

      for (i = 0; i < breakfastMenu.length; i++) {
        if (breakfastMenu[i].name === item.name) {
          return hasDuplicate = true;

        }
      }
      // If breakfastMenu doesn't already have input item, add it
      if (hasDuplicate === false) {
        return breakfastMenu.push(item);
      }
    }

    if (item.type === "lunch") {
      var lunchMenu = pizzaRestaurant.menus.lunch;
      var hasDuplicate = false

      for (i = 0; i < lunchMenu.length; i++) {
        if (lunchMenu[i].name === lunchMenu.name) {

          return hasDuplicate = true;

        }
      }

      if (hasDuplicate === false) {
        return lunchMenu.push(item);
      }

    }

    if (item.type === "dinner") {
      var dinnerMenu = pizzaRestaurant.menus.dinner;
      var hasDuplicate = false;

      for (i = 0; i < dinnerMenu.length; i++) {
        if (dinnerMenu[i].name === item.name) {
          return hasDuplicate = true;

        }
      }

      if (hasDuplicate === false) {
        return dinnerMenu.push(item);
      }
    }
}

function removeMenuItem (pizzaRestaurant, item) {
  //remove baconEggsPizza from menu.

}






module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
