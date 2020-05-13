/**
 * https://refactoring.guru/ru/design-patterns/observer
 */
function Add() {
  const data = { value: 0 };

  return {
    update: (number) => { data.value += number },
    data,
  };
}

function Multiply() {
  const data = { value: 1 };

  return {
    update: (number) => { data.value = data.value * number; },
    data,
  };
}

function Observer() {
  let state;

  const observers = new Set([]);

  const subscribe = (update) => observers.add(update);
  const unsubscribe = (update) => observers.delete(update);
  const notify = () => [...observers].forEach((update) => { update(state) });
  const setState = (number) => state = number;

  return {
    subscribe,
    unsubscribe,
    notify,
    setState
  };
}

const { data: dataAdd, update: updateAdd } = Add();
const { data: dataMultiply, update: updateMultiply } = Multiply();
const { subscribe, unsubscribe, notify, setState } = Observer();
subscribe(updateAdd);
subscribe(updateMultiply);
setState(1);
notify();
setState(2);
notify();
console.log(dataAdd);
console.log(dataMultiply);