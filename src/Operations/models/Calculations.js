class Calculation {
    //the constructor is the first method called after instantiation and usually sets the properties of the object
    constructor(a, b, op) {
        //"this" is the internal reference of the object to access its internal methods and properties
        this.a = a;
        this.b = b;
        this.op = op;
    }
    //get results is a method so that it can return back the results of the calculation
    GetResults() {
        return this.op(this.a,this.b)
    }
}
module.exports = Calculation;



var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    alert("Same instance? " + (instance1 === instance2));
}

var User = function(name) {
    this.name = name;

    this.say = function() {
        log.add("User: " + this.name);
    };
}

var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function() {
        log.add("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

// logging helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {

    var user = new User("Kelly");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();

    log.show();
}

var Request = function(amount) {
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
}

Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log.add("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var request = new Request(378);

    request.get(100).get(50).get(20).get(10).get(5).get(1);

    log.show();
}
