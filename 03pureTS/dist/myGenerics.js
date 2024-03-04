"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree(true)
function identityFour(val) {
    return val;
}
function getSearchProduct(product) {
    //do some database operation
    const myIndex = 3;
    return product[myIndex];
}
// how to convert this into a => function
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 5;
    return products[myIndex];
};
// , means that this is now html but a GENERIC!
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
