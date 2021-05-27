// 1) написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что говорит тип стринг (Рыбы не разговаривают)
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
interface IAnimal {
    typeOfMoving: string;
    talking?: string;

    information(): void;
}

class Cat implements IAnimal {
    typeOfMoving: string;
    talking: string;

    constructor(typeOfMoving: string = 'walk', talking: string = 'meow') {
        this.typeOfMoving = typeOfMoving;
        this.talking = talking;
    }

    information() {
        console.log(`it is a cat who moves by ${this.typeOfMoving} and says ${this.talking}`);
    }
}

let murchik = new Cat('walkie');
console.log(murchik);
murchik.information();

class Bird implements IAnimal {
    typeOfMoving: string;
    talking: string;

    constructor(typeOfMoving: string = 'fly', talking: string = 'lala') {
        this.typeOfMoving = typeOfMoving;
        this.talking = talking;
    }

    information() {
        console.log(`it is a bird who moves by ${this.typeOfMoving} and says ${this.talking}`);
    }
}

let gesha = new Bird('flying', 'gesha');
console.log(gesha);
gesha.information();

class Fish implements IAnimal {
    typeOfMoving: string;

    constructor(typeOfMoving: string = 'swim') {
        this.typeOfMoving = typeOfMoving;
    }

    information() {
        console.log(`it is a fish who moves by ${this.typeOfMoving}`);
    }
}

let rybka = new Fish('swimming');
console.log(rybka);
rybka.information();

// 2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
abstract class AShape {
    abstract perimeter(): number

    abstract area(): number
}

// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
class Triangle extends AShape {
    firstLeg: number;
    secondLeg: number;
    hypotenuse: number;


    constructor(firstLeg: number, secondLeg: number, hypotenuse: number) {
        super();
        this.firstLeg = firstLeg;
        this.secondLeg = secondLeg;
        this.hypotenuse = hypotenuse;
    }

    area(): number {
        return (this.firstLeg * this.secondLeg) / 2;
    }

    perimeter(): number {
        return this.hypotenuse + this.firstLeg + this.secondLeg;
    }
}

class Rectangle extends AShape {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }

    perimeter(): number {
        return 2 * (this.length + this.width);
    }

    area(): number {
        return this.length * this.width;
    }
}

let triangle1: Triangle = new Triangle(2, 3, 4);
let triangle2: Triangle = new Triangle(5, 6, 10);
let rectangle1: Rectangle = new Rectangle(4, 8);
let rectangle2: Rectangle = new Rectangle(7, 10);
let array: Array<AShape> = [];
array.push(triangle1, triangle2, rectangle1, rectangle2);
array.forEach(value => {
    console.log('_______________');
    console.log(value.area());
    console.log(value.perimeter());
    console.log('_______________');
})
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// приходимся циклом по нему и и высчитываем площадь для каждой фигуры


