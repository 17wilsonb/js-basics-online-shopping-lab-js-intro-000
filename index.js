Script started on Thu 14 May 2020 02:24:45 AM UTC
]0;colorful-window-4217@021f34194fd3: ~/js-basics-online-shopping-lab-js-intro-000[01;32mcolorful-window-4217@021f34194fd3[00m:[01;34m~/js-basics-online-shopping-lab-js-intro-000[00m$  learn test

> js-basics-online-shopping-lab@0.1.0 test /home/colorful-window-4217/js-basics-online-shopping-lab-js-intro-000
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json

(node:8226) DeprecationWarning: Configuration via mocha.opts is DEPRECATED and will be removed from a future version of Mocha. Use RC files or package.json instead.

[0m[0m
[0m  addToCart()[0m
  [31m  1) "before each" hook for "can add items to the cart"[0m


[92m [0m[32m 0 passing[0m[90m (112ms)[0m
[31m  1 failing[0m

[0m  1) "before each" hook for "can add items to the cart":
[0m[31m     ReferenceError: setCart is not defined[0m[90m
      at Context.<anonymous> (test/index-test.js:4:3)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0m]0;colorful-window-4217@021f34194fd3: ~/js-basics-online-shopping-lab-js-intro-000[01;32mcolorful-window-4217@021f34194fd3[00m:[01;34m~/js-basics-online-shopping-lab-js-intro-000[00m$  [H[2J]0;colorful-window-4217@021f34194fd3: ~/js-basics-online-shopping-lab-js-intro-000[01;32mcolorful-window-4217@021f34194fd3[00m:[01;34m~/js-basics-online-shopping-lab-js-intro-000[00m$  script
Script started, file is typescript
]0;colorful-window-4217@021f34194fd3: ~/js-basics-online-shopping-lab-js-intro-000[01;32mcolorful-window-4217@021f34194fd3[00m:[01;34m~/js-basics-online-shopping-lab-js-intro-000[00m$  script close
Script started, file is close
]0;colorful-window-4217@021f34194fd3: ~/js-basics-online-shopping-lab-js-intro-000[01;32mcolorful-window-4217@021f34194fd3[00m:[01;34m~/js-basics-online-shopping-lab-js-intro-000[00m$  script [K[K[K[K[K[K[Klearn test

> js-basics-online-shopping-lab@0.1.0 test /home/colorful-window-4217/js-basics-online-shopping-lab-js-intro-000
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json

(node:8751) DeprecationWarning: Configuration via mocha.opts is DEPRECATED and will be removed from a future version of Mocha. Use RC files or package.json instead.

[0m[0m
[0m  addToCart()[0m
  [32m  ✓[0m[90m can add items to the cart[0m
  [32m  ✓[0m[90m turns items into JavaScript objects before adding them to the cart[0m
  [32m  ✓[0m[90m properly structures the cart item as object with a key of `itemName` and the corresponding value { itemName: itemName } format[0m
  [32m  ✓[0m[90m sets the price (integer between 1 and 100) on the cart object using the key `price`[0m
  [32m  ✓[0m[90m chooses the price at random[0m
  [32m  ✓[0m[90m returns a message indicating that the item has been added[0m

[0m  viewCart()[0m
  [32m  ✓[0m[90m prints 'Your shopping cart is empty.' if the cart is empty[0m
  [32m  ✓[0m[90m correctly prints a one-item cart[0m
  [32m  ✓[0m[90m correctly prints a two-item cart[0m
  [32m  ✓[0m[90m correctly prints a three-or-more-item cart[0m

[0m  total()[0m
  [32m  ✓[0m[90m adds up the price of all items in the cart[0m

[0m  removeFromCart()[0m
  [31m  1) removes the specified item from the cart[0m
  [32m  ✓[0m[90m alerts you if you're trying to remove an item that isn't in your cart[0m

[0m  placeOrder()[0m
  [32m  ✓[0m[90m doesn't place the order if a credit card number is not provided[0m
  [32m  ✓[0m[90m places an order when a credit card number is provided[0m
  [32m  ✓[0m[90m empties the cart[0m


[92m [0m[32m 15 passing[0m[90m (158ms)[0m
[31m  1 failing[0m

[0m  1) removeFromCart()
       removes the specified item from the cart:
[0m[31m     Error: Expected [ 'watermelon' ] to equal 'yams'[0m[90m
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.