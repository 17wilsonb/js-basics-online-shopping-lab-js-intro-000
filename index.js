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
  // If cart is empty...
  if (getCart().length === 0){
    return "Your shopping cart is empty.";
  }
  // Otherwise...
  var status = 'In your cart, you have ';
  if ( getCart().length >= 1 ) {
    status += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  }
  if ( getCart().length >= 2 ) {
    var middle = '';
    for (var i = 1; i < getCart().length - 1; i++) {
      middle += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    }
    status += `${middle}, and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`;
  }
  return `${cartDescription}.`
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
