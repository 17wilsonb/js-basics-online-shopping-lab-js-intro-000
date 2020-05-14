var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function convertToItem(itemName){
  var item = {itemName: itemName, itemPrice: Math.floor(Math.random()*100)}
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
  return `${cartDescription}.`;
}

function total() {
  var sum = 0;
  for (var i = 0; i < getCart().length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var searchResult;
  for (var i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  if(searchResult){
    var indexOfItemToRemove = cart.indexOf(searchResult);
    return getCart().splice(indexOfItemToRemove,1);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalPrice = total();
    setCart([]);
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
