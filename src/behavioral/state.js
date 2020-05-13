const openDoor = {
  isOpenned: true,
  close: (changeState) => {
    console.log("the door is closed");
    changeState(closeDoor);
  },
  open: () => {}
};

const closeDoor = {
  isOpenned: false,
  close: () => {},
  open: (changeState) => {
    console.log("the door is openned");
    changeState(openDoor);
  }
};


function Door() {
  let currentState = openDoor;

  const changeState = (nextState) => currentState = nextState;

  if (currentState.isOpenned) {
    currentState.close(changeState);
  }
  if (!currentState.isOpenned) {
    currentState.open(changeState);
  }
  if (currentState.isOpenned) {
    currentState.close(changeState);
  }
}
Door();