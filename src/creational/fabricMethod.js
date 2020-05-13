function popupType1(data) {
  const render = () => console.log(`render popup of type 1 with passed arguments ${data}`);

  return {
    render
  };
}

function popupType2(data) {
  const render = () => console.log(`render popup of type 2 with passed arguments ${data}`);

  return {
    render
  };
}

function SomeComponent() {
}
SomeComponent.prototype.render = function(data) {
  const popup = this.createPopup(data);
  popup.render();
}
SomeComponent.prototype.createPopup = function() {}

function ComponentType1() {}
ComponentType1.prototype = Object.create(SomeComponent.prototype);
ComponentType1.prototype.constructor = ComponentType1;
ComponentType1.prototype.createPopup = function(data) { return popupType1(data) }

function ComponentType2() {}
ComponentType2.prototype = Object.create(SomeComponent.prototype);
ComponentType2.prototype.constructor = ComponentType2;
ComponentType2.prototype.createPopup = function(data) { return popupType2(data) }

const componentWithType1 = new ComponentType1();
componentWithType1.render('from component1');

const componentWIthType2 = new ComponentType2();
componentWIthType2.render('from component2');