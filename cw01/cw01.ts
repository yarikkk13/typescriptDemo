// 1) написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что говорит тип стринг (Рыбы не разговаривают)
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
interface Animal {
    typeOfMoving: string;
    talking?: string;

    information(): void;
}

class Cat implements Animal {
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

// 2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// приходимся циклом по нему и и высчитываем площадь для каждой фигуры


