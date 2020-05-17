/**
 * https://refactoring.guru/ru/design-patterns/singleton/typescript/example
 */

function singleton() {
  const getData = () => {
    return singleton.data;
  }

  const addItem = (item) => {
    singleton.data.push(item)
  }

  return {
    getData,
    addItem
  };
}

singleton.data = [];

function example1() {
  const { getData, addItem } = singleton();
  addItem(3);
  console.log(getData()); // [3]
}

function example2() {
  const { getData, addItem } = singleton();
  addItem(4);
  console.log(getData()); // [3, 4]
}

example1();
example2();