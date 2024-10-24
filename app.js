const CART_ITEMS_CONTAINER = document.getElementById("cart_items_container");
const DISPLAY_CART_TOTAL = document.getElementById("display_cart_total");
const CHECK_OUT_BTN = document.getElementById("check_out_btn");

let cartItems = [
  {
    id: 1,
    Image:
      "https://i5.walmartimages.com/asr/7497fd45-fece-4cc5-9c33-05ab195c985f.87a85446b3ee239f0495dc82a87788cf.jpeg",
    name: "IPhone 12",
    price: 12500,
    quantity: 1,
  },
  {
    id: 2,
    Image:
      "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-15-Pro-Max-512GB-Unlocked-White-Titanium-MU6C3LL-A-Excellent-Condition_bda35c42-0ffe-4dbd-b1e8-2fc54eb54162.ba59fa32579f5550a2da5f086ec44e32.jpeg",
    name: "IPhone 15",
    price: 22500,
    quantity: 1,
  },
  {
    id: 3,
    Image:
      "https://www.istore.co.za/media/catalog/product/i/p/iphone_13_green_pdp_image_position-1a__wwen_4.png?format=jpeg",
    name: "IPhone 11",
    price: 32500,
    quantity: 1,
  },
  {
    id: 4,
    Image:
      "https://www.istore.co.za/media/catalog/product/i/p/iphone_14_blue-5_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    name: "IPhone 14",
    price: 8500,
    quantity: 1,
  },
  {
    id: 5,
    Image:
      "https://www.istore.co.za/media/catalog/product/i/p/iphone_13_pink_pure_back_iphone_13_pink_pure_front_2-up_screen__usen.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    name: "IPhone 13",
    price: 9900,
    quantity: 1,
  },
];
let totalCost = 0;

// A function to display cart items
function display_cart_items() {
  let product_to_display = [];

  for (let i = 0; i < cartItems.length; i++) {
    const cart_product = `  <!-- single cart product -->
          <div class="flex justify-between items-center shadow-md p-5">
            <div class="flex items-center gap-4">
              <img
                src="${cartItems[i].Image}"
                alt="product image"
                class="w-40 rounded-md"
              />
              <div>
                <h2 class="font-bold text-3xl">${cartItems[i].name}</h2>
                <button
                onclick="removeItemsFromCart(${cartItems[i].id})"
                  class="bg-red-500 text-white font-semibold p-2 rounded-md mt-2"
                >
                  Delete
                </button>
              </div>
            </div>

            <div class="text-center">
              <p class="font-bold text-xl">${cartItems[i].price}</p>
              
              
              <button onclick="decreaseProductQuantity(${cartItems[i].id})"
                class="bg-red-500 text-white text-lg font-semibold p-2 rounded-md mt-2"
              >
                -
              </button>
              <span class="font-bold text-lg">${cartItems[i].quantity}</span>
              <button  onclick="increaseProductQuantity(${cartItems[i].id})"
                class="bg-green-500 text-white text-lg font-semibold p-2 rounded-md mt-2"
              >
                +
              </button>
            </div>
          </div>
          <!-- single cart product ends here -->`;

    product_to_display.push(cart_product);
  }
  if (product_to_display.length == 0) {
    CART_ITEMS_CONTAINER.innerHTML = `<h1 class="text-center text-3xl font-semibold text-red-600">Cart is empty please add items 😎</h1>`;
    DISPLAY_CART_TOTAL.textContent = 0;
    return;
  }
  CART_ITEMS_CONTAINER.innerHTML = product_to_display.join(" ");
}
display_cart_items();
// #########################################

// function to increase product quality

function increaseProductQuantity(productID) {
  for (let i = 0; i < cartItems.length; i++) {
    // check for the product that was click
    if (cartItems[i].id == productID) {
      cartItems[i].quantity++;
    }
  }
  display_cart_items();
  calculateCartTotal();
}
// ###################################

function decreaseProductQuantity(productID) {
  for (let i = 0; i < cartItems.length; i++) {
    // check for the product that was click
    if (cartItems[i].id == productID && cartItems[i].quantity != 1) {
      cartItems[i].quantity--;
    }
  }
  display_cart_items();
  calculateCartTotal();
}
// #####################################

// function to remove items from cart
function removeItemsFromCart(productID) {
  const productLeftInCart = [];

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id !== productID) {
      productLeftInCart.push(cartItems[i]);
    }
  }
  cartItems = productLeftInCart;
  display_cart_items();
  calculateCartTotal();
}
// #################################

// function to calculate cart total
function calculateCartTotal() {
  for (let i = 0; i < cartItems.length; i++) {
    totalCost = totalCost + cartItems[i].price * cartItems[i].quantity;

    DISPLAY_CART_TOTAL.textContent = totalCost;
  }
  return totalCost;
}

CHECK_OUT_BTN.addEventListener("click", processToCheckOut);
function processToCheckOut() {
  console.log(cartItems);
  console.log(calculateCartTotal());
  // ##############################
}
