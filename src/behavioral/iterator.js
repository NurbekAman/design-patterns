function Iterator(array) {
  this.array = array;
  this.index = 0;
}

Iterator.prototype.isValid = function() {
  return this.index <= this.array.length - 1;
};

function FirstIterator() {
  Iterator.apply(this, arguments);
}

FirstIterator.prototype = Object.create(Iterator.prototype);
FirstIterator.prototype.constructor = FirstIterator;
FirstIterator.prototype.currentElement = function() {
  if (this.isValid()) {
    const value = this.array[this.index];
    this.index += 1;

    return value;
  }

  return null;
};

function SecondIterator(array) {
  Iterator.apply(this, arguments);
}

SecondIterator.prototype = Object.create(Iterator.prototype);
SecondIterator.prototype.constructor = SecondIterator;
SecondIterator.prototype.currentElement = function() {
  if (this.isValid()) {
    const value = this.array[this.index];

    this.index += 2;

    return value;
  }
};

function Agregator() {
  this.array = [];
}

Agregator.prototype.addItem = function(item) {
  this.array.push(item);
};
Agregator.prototype.getCount = function() {
  return this.array.length - 1;
};
Agregator.prototype.getIterator = function(type) {
  if (type === "second") {
    return new SecondIterator([...this.array]);
  }

  return new FirstIterator([...this.array]);
};

const collection = new Agregator();

collection.addItem(1);
collection.addItem(2);
collection.addItem(3);
collection.addItem(4);

const firstIterator = collection.getIterator();
const secondIterator = collection.getIterator("second");
