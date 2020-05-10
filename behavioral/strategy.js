/**
 * Strategy
 *
 * https://refactoring.guru/ru/design-patterns/strategy/typescript/example
 */

/**
 * Strategy
 *
 * https://refactoring.guru/ru/design-patterns/strategy/typescript/example
 */

const stocksInUSA = ['Microsoft', 'Tesla', 'Google'];
const stocksInEurope = ['BMW', 'Ferarri'];
const stocksInKyrgyzstan = ['Shoro'];

function isEligibleInUSA(stock) {
 //make some operation with stock required from USA
 return stocksInUSA.includes(stock);
}

function isEligibleInEurope(stock) {
 // make some operation with stock required from Europe
 return stocksInEurope.includes(stock);
}

function isEligibleInKyrgystan(stock) {
 // make some operation with stock required from Kyrgyzstan
 return stocksInKyrgyzstan.includes(stock);
}

function BuyStock(stategy, country) {
this.stategy = stategy;
this.country = country;
}

BuyStock.prototype.buy = function(stock) {
  const isEligible = this.stategy(stock);
  if (isEligible) {
    return `you have permition to buy this ${stock} in ${this.country}`;
  } else {
    return `you don't have permition to buy this ${stock} in ${this.country}`;
  }
}

BuyStock.prototype.setStrategy = function(stategy, country) {
 this.stategy = stategy;
 this.country = country;
}

const buyStock = new BuyStock(isEligibleInUSA);
console.log(buyStock.buy('Microsoft'));
buyStock.setStrategy(isEligibleInEurope);
console.log(buyStock.buy('Shoro'));
buyStock.setStrategy(isEligibleInKyrgystan);
console.log(buyStock.buy('BMW'));