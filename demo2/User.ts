import {Wife} from "./Wife";

export class User {
    name: string;
    age?: number;
    skills: string[];
    wife?: Wife;

    constructor(name: string, age: number, skills: string[], wife: Wife) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.wife = wife
    }

    greeting() {
        console.log(`hello my name is ${this.name}`)
    }

}