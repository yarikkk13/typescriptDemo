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
    bribery(bribe: number): string {
        if (this.degreeOfHonesty < 50) {
            if (bribe < this.minimalSum) {
                return 'not successful'
            } else if (bribe > this.minimalSum + (this.minimalSum * this.degreeOfHonesty / 100)) {
                return 'the deal is successful'
            } else {
                return 'let think about it'
            }
        } else return 'u went to the wrong person'
    }
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
console.log(parubii.bribery(100));
console.log(kozak.bribery(200));
console.log(kozak.bribery(1000));
console.log(kozak.bribery(301));

// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)

class PoliticalParty {
    name: string;
    headOfParty: Deputy;
    partyPolitician: Array<Deputy>;

    constructor(name: string, headOfParty: Deputy, partyPolitician: Array<Deputy> = []) {
        this.name = name;
        this.headOfParty = headOfParty;
        this.partyPolitician = partyPolitician;
    };

// - додати\видалити депутата з фракції
    addDeputy(deputy: Deputy) {
        return this.partyPolitician.push(deputy)
    };

    deleteDeputy(deputy: Deputy) {
        this.partyPolitician = this.partyPolitician.filter(value => {
            return value.name !== deputy.name
        })
    };

// - вивести всіх хабарників фракції
    showAllBribers() {
        this.partyPolitician.forEach(value => {
            if (value.degreeOfHonesty < 50) {
                console.log(value)
            }
        })

    };

// - вивести найбільшого хабарника у фрації
    showTheBiggestBriber() {
        let theBiggestBriber = this.partyPolitician.reduce((acc: Deputy, currentValue: Deputy) => {

            if (acc.degreeOfHonesty > currentValue.degreeOfHonesty)
                acc = currentValue;
            return acc;
        })
        console.log(theBiggestBriber)
    };

// - вивести фсіх депутатів фракції
    showAllDeputies() {
        this.partyPolitician.forEach(value => console.log(value))
    };
}

let servant = new PoliticalParty('Servant of the People', brown);
let fatherland = new PoliticalParty('Fatherland', tymoshenko);
let platform = new PoliticalParty('Opposition Platform — For Life', medvedchuk);
let bpp = new PoliticalParty('European Solidarity', poroh);

// як зробити так що очікується неповний обєкт наприклад без масиву депутатів
// але не використовуючи елвіса або | оператора або за замовчуванням пустий об'єкт
console.log(servant)
servant.addDeputy(razumkov); //як можна зробити щоб приймало депутатів в одній команді через кому
servant.addDeputy(stefanchuk);
servant.addDeputy(brown);
servant.addDeputy(venediktova);
servant.addDeputy(ivanisov);
console.log(servant);
fatherland.addDeputy(tymoshenko);
fatherland.addDeputy(sobolev);
fatherland.addDeputy(taruta);
fatherland.addDeputy(nalyvajchenko);
fatherland.addDeputy(cymbalyuk);
platform.addDeputy(bojko);
platform.addDeputy(medvedchuk);
platform.addDeputy(rabinovich);
platform.addDeputy(lovochkina);
platform.addDeputy(kozak);
bpp.addDeputy(poroh);
bpp.addDeputy(parubii);
bpp.addDeputy(zabrodskiy);
bpp.addDeputy(jemilyev);
bpp.addDeputy(zinkevych);

console.log('____________________');
bpp.showAllDeputies();
console.log('____________________');

console.log('____________________');
servant.showAllBribers();
console.log('____________________');
console.log('____________________');
servant.deleteDeputy(venediktova)
console.log('____________________');
servant.showAllDeputies();
servant.addDeputy(venediktova)
console.log('____________________');
servant.showTheBiggestBriber()


// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір

class VerkhovnaRada {
    chairman: Deputy;
    convocation: number;
    massMedia: string;
    location: string;
    parliament: Array<PoliticalParty>;

    constructor(chairman: Deputy, convocation: number, massMedia: string,
                location: string, parliament: Array<PoliticalParty> = []) {
        this.parliament = parliament;
        this.chairman = chairman;
        this.convocation = convocation;
        this.massMedia = massMedia;
        this.location = location;
    }

    addFraction(fraction: PoliticalParty) {
        return this.parliament.push(fraction)
    };

    deleteFraction(fraction: PoliticalParty) {
        this.parliament = this.parliament.filter(value => {
            return value.name !== fraction.name
        })
    };

    // - вивести всі фракції

    showAllFraction() {
        this.parliament.forEach(value => console.log(value))
    }

    // - вивести конкретну фракцію

    showFraction(fraction: PoliticalParty) {
        this.parliament.forEach(value => {
            if (value.name == fraction.name) {
                console.log(value)
            }
        })

    }

    // - вивести найбільшого хабарника верховної ради
    showTheBiggestBriberAtAll() {
        let biggestBribers = [];
        this.parliament.forEach(value => {
            let theBiggestAtAll = value.partyPolitician.reduce((acc: Deputy, value: Deputy) => {
                if (acc.degreeOfHonesty > value.degreeOfHonesty)
                    acc = value
                return acc

            })
            biggestBribers.push(theBiggestAtAll)
        })
        console.log(biggestBribers);
        let b = biggestBribers.reduce((acc: Deputy, value: Deputy) => {
            if (acc.degreeOfHonesty > value.degreeOfHonesty)
                acc = value
            return acc
        })
        console.log(b)
    }
}

let VR9 = new VerkhovnaRada(razumkov, 9, 'Voice of Ukraine', 'Constitution Square');
VR9.addFraction(servant);
VR9.addFraction(bpp);
VR9.addFraction(fatherland);
VR9.addFraction(platform);
console.log(VR9);
VR9.deleteFraction(bpp);
console.log(VR9);
VR9.addFraction(bpp);
console.log('_____________');
VR9.showAllFraction();
console.log('_____________');
VR9.showFraction(bpp);
console.log('_____________');
console.log('_____________');
console.log('_____________');
console.log('_____________');
console.log('_____________');
console.log('_____________');
VR9.showTheBiggestBriberAtAll();


