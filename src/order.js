//Receive the order and then put in an array
//wants me to place order variable into the
// deliveryOrders array.

function takeOrder(acceptOrder, orderList) {
  if (orderList.length < 3 ){
    return orderList.push(acceptOrder);
  } else
    console.log("List is full");
  }

  //find order number, remove object from array

function refundOrder(order, orderList) {

  for (var i = 0; i < orderList.length; i++) {
//for loop looks thru the orderList to find the number.
//stop when it finds match
    if (order === orderList[i].orderNumber) {
//if the order number that is placed matches with the object in the array
//[i] is a placeholder for the array number of the match to be returned late
    return orderList.splice(i,1);
  }

}

}

function listItems(deliveryOrders) {

  var stringReturn = '';

  for (var i = 0; i < deliveryOrders.length; i++) {
    if (i === deliveryOrders.length -1) {
    stringReturn += deliveryOrders[i].item;
  } else {
    stringReturn += deliveryOrders[i].item + ', '
  }
}
    return stringReturn;

  }

function searchOrder(deliveryOrders, food) {

  for (var i = 0; i < deliveryOrders.length; i++){
    if (deliveryOrders[i].item === food) {
    return true
  }
}   return false
//first have a loop to look at everything in the deliveryOrders array.
//if there is an item match, it will return as true
   //if (deliveryOrders[i])

}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
