"use strict";
exports.__esModule = true;
let User_1 = require("../demo2/User");
let Wife_1 = require("../demo2/Wife");

function foo(user) {
    console.log(user.name.toUpperCase());
    user.greeting();
    console.log(user.wife.name);
    user.wife.action();
}

let wife = new Wife_1.Wife('kokoska', 19);
let user = new User_1.User('kokos', 21, ['dsds', 'dsdsds'], wife);
foo(user);
