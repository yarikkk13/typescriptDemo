// Створити такі класи:
// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря
enum EGender {
    MALE = 'male',
    FEMALE = 'female'
}

class Deputy {
    name: string;
    age: number;
    gender: EGender;
    degreeOfHonesty: number;//як тут правильно записати що число має бути число від 0 до 100
    minimalSum: number;

    constructor(name: string, age: number, gender: EGender,
                degreeOfHonesty: number, minimalSum: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degreeOfHonesty = degreeOfHonesty;
        this.minimalSum = minimalSum;
    }

//    Мають бути присутні такі можливості:
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
// Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
// Якщо сума взяти менша за мінімальку, тоді хабар дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
// Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
// та бере хабар.
// Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

}

let razumkov = new Deputy('Dmytro Razumkov', 37, EGender.MALE, 70, 5000);
let stefanchuk = new Deputy('Ruslan Stefanchuk', 45, EGender.MALE, 60, 6000);
let venediktova = new Deputy('Iryna Venediktova', 37, EGender.FEMALE, 20, 2000);
let brown = new Deputy('David Arahamiya', 42, EGender.MALE, 70, 10000);
let ivanisov = new Deputy('Roman Ivanisov', 37, EGender.MALE, 10, 1200);
let tymoshenko = new Deputy('Julia Tymoshenko', 61, EGender.FEMALE, 1, 100);
let sobolev = new Deputy('Serhii Sobolev', 59, EGender.MALE, 40, 1000);
let taruta = new Deputy('Serhii Taruta', 65, EGender.MALE, 50, 2000);
let nalyvajchenko = new Deputy('Serhii Nalyvajchenko', 54, EGender.MALE, 55, 10000);
let cymbalyuk = new Deputy('Dmytro Cymbalyuk', 78, EGender.MALE, 51, 3000);
let bojko = new Deputy('Serhii Bojko', 62, EGender.MALE, 15, 1000);
let medvedchuk = new Deputy('Viktor Medvedchuk', 99, EGender.MALE, 1, 10);
let kozak = new Deputy('Dmytro Kozak', 74, EGender.MALE, 3, 300);
let rabinovich = new Deputy('Vadym Rabinovich', 77, EGender.MALE, 5, 500);
let lovochkina = new Deputy('Julia Lovochkina', 62, EGender.FEMALE, 2, 100);
let poroh = new Deputy('Petro Poroshenko', 55, EGender.MALE, 75, 100000);
let parubii = new Deputy('Andrij Parubij', 34, EGender.MALE, 60, 50000);
let zabrodskiy = new Deputy('Mykhajlo Zabrodskiy', 47, EGender.MALE, 90, 1000000);
let jemilyev = new Deputy('Mustafa Jemilyev', 77, EGender.MALE, 99, 5000000);
let zinkevych = new Deputy('Jana Zinkevych', 26, EGender.FEMALE, 70, 50000);

//
// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)

class PoliticalParty {
    name: string;
    headOfParty: Deputy;
    partyPolitician: Array<Deputy>

    constructor(name: string, headOfParty: Deputy, partyPolitician?: Array<Deputy>) {
        this.name = name;
        this.headOfParty = headOfParty;
        this.partyPolitician = partyPolitician;
    }

// - додати\видалити депутата з фракції

// - вивести всіх хабарників фракції

// - вивести найбільшого хабарника у фрації

// - вивести фсіх депутатів фракції
}

let servant = new PoliticalParty('Servant of th People', razumkov);
let fatherland = new PoliticalParty('Fatherland', tymoshenko);
let platform = new  PoliticalParty('Opposition Platform — For Life', medvedchuk)
// як зробити так що очікується неповний масив



// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір

class VerkhovnaRada {
    private _parliament: Array<PoliticalParty>;
    chairman: Deputy;
    convocation: number;
    massMedia: string;
    location: string;


    constructor(parliament: Array<PoliticalParty>, chairman: Deputy, convocation: number,
                massMedia: string, location: string) {
        this._parliament = parliament;
        this.chairman = chairman;
        this.convocation = convocation;
        this.massMedia = massMedia;
        this.location = location;
    }

    // - додати\видалити фракцію
    // - вивести всі фракції
    // - вивести конкретну фракцію
// - вивести найбільшого хабарника верховної ради


}

