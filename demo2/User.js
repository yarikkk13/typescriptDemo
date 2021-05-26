"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age, skills, wife) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.wife = wife;
    }
    User.prototype.greeting = function () {
        console.log("hello my name is " + this.name);
    };
    return User;
}());
exports.User = User;
