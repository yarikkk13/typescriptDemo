import {User} from "../demo2/User";
import {Wife} from "../demo2/Wife";

function foo(user: User) {
    console.log(user.name.toUpperCase());
    user.greeting();
    console.log(user.wife.name);
    user.wife.action();
}
let wife = new Wife('kokoska',19)
let user = new User('kokos',21,['dsds','dsdsds'],wife);
foo(user);