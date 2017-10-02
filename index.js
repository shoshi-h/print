var module = require('./lib/print.js');


function myModule() {
    if (false === (this instanceof myModule)) {
        return new myModule();
    }
}
myModule.prototype.printName = function (name,family)  {
    module.printName(name,family);
}


module.exports = new myModule();
