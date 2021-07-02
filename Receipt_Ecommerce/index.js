"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "hoodie";
var shippingAddress = "Summer Street, New York";
var shipping = 5;
var taxPercent = 0.05;
var product = products_1["default"].forEach(function (product) {
    if (product.name === productName) {
        if (Boolean(product.preOrder) === true) {
            console.log("Thanks for pre-ordering that item, we will send you a message when it's on it's way.");
        }
        if (Number(product.price) > 25) {
            shipping = 0;
            console.log("We provide free shipping for this product.");
        }
        if (shippingAddress.match("New York")) {
            taxPercent = 0.1;
        }
        var taxTotal = Number(product.price) * taxPercent;
        var total = Number(product.price) + taxTotal + shipping;
        console.log("\n  Product: " + product.name + "\n  Address:  " + shippingAddress + "\n  Price:    " + Number(product.price).toFixed(2) + "\n  Tax:      " + taxTotal.toFixed(2) + "\n  Shipping: " + shipping.toFixed(2) + "\n  Total:    " + total.toFixed(2) + "\n  ");
    }
});
