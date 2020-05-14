var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function convertToItem(itemName){
  var item = {itemName: itemName, itemPrice: Math.floor(Math.random()*100);}
  return item;
}

function addToCart(item) {
  getCart.push(convertToItem(item));
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  if (getCart().length === 0){
    return "Your shopping cart is empty.";
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < getCart().length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
