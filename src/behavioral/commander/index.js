class Customer {
  constructor() {
    this.command = null;
  }

  set command(command) {
    this.command = command;
  }
  order() {
    this.command.order()
  }
  decline() {
    this.command.undor();
  }
}

class Command {
  constructor(market) {
    this.market = market;
    this.food = null;
  }

  order(food) {
    this.market.order(food);
    this.food = food;
    return true;
  }

  undor() {
    if (this.food) {
      this.market.declineFood(this.food);
      this.food = '';
    }
  }
}

class Market {
  order(food) {
    Object.entries(food).forEach(([key, value]) => {
      console.log(`prepare ${key} in mount ${value}`);
    });
  }

  declineFood() {
    Object.entries(food).forEach(([key, value]) => {
      console.log(`product ${key} in mount ${value} was declined`);
    });
  }
}

const customer = new Customer();
customer.command = new Command(new Market());
customer.order({ potato: 3, tomato: 1 });
customer.decline();
