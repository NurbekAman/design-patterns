/**
 * https://refactoring.guru/ru/design-patterns/template-method
 */
function ClientApplication(projectName) {
  this.name = projectName;

  this.startApp = function() {
    console.log("start application", this.name);
  };
  this.makeBA = function() {
    console.log("make bussiness requirenments");
  };
  this.makeProccess = function() {
    console.log("make a process using Agile, Scrum");
  };
  this.makeMarket = function() {
    console.log("make ad for the application");
  };
  this.deliver = function() {
    console.log("deliver application to the client");
  };
  this.design = function() {
    this.startApp();
    this.makeBA();
    this.makeProccess();
    this.makeBackEnd();
    this.makeFrontEnd();
    this.makeMarket();
  };
}

ClientApplication.prototype.makeBackEnd = function() {
  console.log("use Java, OracleDB");
};

ClientApplication.prototype.makeFrontEnd = function() {
  console.log("use Angular");
};

function WebApplication() {
  ClientApplication.apply(this, arguments);
}

WebApplication.prototype = Object.create(ClientApplication.prototype);
WebApplication.prototype.constructor = WebApplication;

WebApplication.prototype.makeBackEnd = function() {
  console.log("use Phyton and MySql");
};

WebApplication.prototype.makeFrontEnd = function() {
  console.log("use React");
};

function AndroidApplication() {
  ClientApplication.apply(this, arguments);
}

AndroidApplication.prototype = Object.create(ClientApplication.prototype);
AndroidApplication.prototype.constructor = AndroidApplication;

AndroidApplication.prototype.makeFrontEnd = function() {
  console.log('use Android');
}

const webApp = new WebApplication("Rocket");
webApp.design();
const androidApp = new AndroidApplication('Android');
androidApp.design();