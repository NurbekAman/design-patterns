function FlatConfirmationType1(data) {
  const render = () => { console.log(`draw confirmation type1 with ${data}`) };

  return {
    render
  };
}

function FlateConfirmationType2(data) {
  const render = () => { console.log(`draw confirmation type2 with ${data}`) };

  return {
    render
  };
}

function ModalConfirmationType1(data) {
  const render = () => { console.log(`draw confirmation type1 inside modal with ${data}`) };

  return {
    render
  };
}

function ModalConfirmationType2(data) {
  const render = () => { console.log(`draw confirmation type2 inside modal with ${data}`) };

  return {
    render
  };
}

function AbstractConfirmation(data) {
  this.data = data;
  this.type = data.type;
}
AbstractConfirmation.prototype.createConfirmation = function() {}

function ModalConfirmation() {
  AbstractConfirmation.apply(this, arguments);
}
ModalConfirmation.prototype = Object.create(AbstractConfirmation.prototype);
ModalConfirmation.prototype.constructor = ModalConfirmation;
ModalConfirmation.prototype.createConfirmation = function() {
  if (this.type === 'type1') {
    return ModalConfirmationType1(this.data);
  }
  if (this.type === 'type2') {
    return ModalConfirmationType2(this.data);
  }
}

function FlatConfirmation() {
  AbstractConfirmation.apply(this, arguments);
}
FlatConfirmation.prototype = Object.create(AbstractConfirmation.prototype);
FlatConfirmation.prototype.constructor = FlatConfirmation;
FlatConfirmation.prototype.createConfirmation = function() {
  if ('type1' === this.type) {
    return FlatConfirmationType1(this.data);
  }

  if ('type2' === this.type) {
    return FlateConfirmationType2(this.data);
  }
}


function Processor(fabric) {
  const confirmation = fabric.createConfirmation();

  const createUI = () => {
    console.log('draw someting');
    confirmation.render();
    console.log('draw other part');
  }

  return { createUI };
}

const actionProcessor = Processor(new FlatConfirmation({ type: 'type1' }));
actionProcessor.createUI();
const modalProcessor = Processor(new ModalConfirmation({ type: 'type2' }));
modalProcessor.createUI();