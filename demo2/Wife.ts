export class Wife {
    name?: string;
    age?: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    action(){
        console.log('do some')
    }
}