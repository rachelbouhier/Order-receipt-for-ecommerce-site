import products from "./products";

const productName: string = "hoodie";
const shippingAddress: string = "Summer Street, New York";
let shipping = 5;
let taxPercent = 0.05;

const product = products.forEach((product) => {
  if (product.name === productName) {
    if (Boolean(product.preOrder) === true) {
      console.log(
        "Thanks for pre-ordering that item, we will send you a message when it's on it's way."
      );
    }

    if (Number(product.price) > 25) {
      shipping = 0;
      console.log("We provide free shipping for this product.");
    }

    if (shippingAddress.match("New York")) {
      taxPercent = 0.1;
    }

    let taxTotal = Number(product.price) * taxPercent;
    let total = Number(product.price) + taxTotal + shipping;

    console.log(`
  Product: ${product.name}
  Address:  ${shippingAddress}
  Price:    ${Number(product.price).toFixed(2)}
  Tax:      ${taxTotal.toFixed(2)}
  Shipping: ${shipping.toFixed(2)}
  Total:    ${total.toFixed(2)}
  `);
  }
});
