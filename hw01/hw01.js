// Створити такі класи:
// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря
var EGender;
(function (EGender) {
    EGender["MALE"] = "male";
    EGender["FEMALE"] = "female";
})(EGender || (EGender = {}));
var Deputy = /** @class */ (function () {
    function Deputy(name, age, gender, degreeOfHonesty, minimalSum) {
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
    Deputy.prototype.bribery = function (bribe) {
        if (this.degreeOfHonesty < 50) {
            if (bribe < this.minimalSum) {
                return 'not successful';
            }
            else if (bribe > this.minimalSum + (this.minimalSum * this.degreeOfHonesty / 100)) {
                return 'the deal is successful';
            }
            else {
                return 'let think about it';
            }
        }
        else
            return 'u went to the wrong person';
    };
    return Deputy;
}());
var razumkov = new Deputy('Dmytro Razumkov', 37, EGender.MALE, 70, 5000);
var stefanchuk = new Deputy('Ruslan Stefanchuk', 45, EGender.MALE, 60, 6000);
var venediktova = new Deputy('Iryna Venediktova', 37, EGender.FEMALE, 20, 2000);
var brown = new Deputy('David Arahamiya', 42, EGender.MALE, 70, 10000);
var ivanisov = new Deputy('Roman Ivanisov', 37, EGender.MALE, 10, 1200);
var tymoshenko = new Deputy('Julia Tymoshenko', 61, EGender.FEMALE, 1, 100);
var sobolev = new Deputy('Serhii Sobolev', 59, EGender.MALE, 40, 1000);
var taruta = new Deputy('Serhii Taruta', 65, EGender.MALE, 50, 2000);
var nalyvajchenko = new Deputy('Serhii Nalyvajchenko', 54, EGender.MALE, 55, 10000);
var cymbalyuk = new Deputy('Dmytro Cymbalyuk', 78, EGender.MALE, 51, 3000);
var bojko = new Deputy('Serhii Bojko', 62, EGender.MALE, 15, 1000);
var medvedchuk = new Deputy('Viktor Medvedchuk', 99, EGender.MALE, 1, 10);
var kozak = new Deputy('Dmytro Kozak', 74, EGender.MALE, 3, 300);
var rabinovich = new Deputy('Vadym Rabinovich', 77, EGender.MALE, 5, 500);
var lovochkina = new Deputy('Julia Lovochkina', 62, EGender.FEMALE, 2, 100);
var poroh = new Deputy('Petro Poroshenko', 55, EGender.MALE, 75, 100000);
var parubii = new Deputy('Andrij Parubij', 34, EGender.MALE, 60, 50000);
var zabrodskiy = new Deputy('Mykhajlo Zabrodskiy', 47, EGender.MALE, 90, 1000000);
var jemilyev = new Deputy('Mustafa Jemilyev', 77, EGender.MALE, 99, 5000000);
var zinkevych = new Deputy('Jana Zinkevych', 26, EGender.FEMALE, 70, 50000);
console.log(parubii.bribery(100));
console.log(kozak.bribery(200));
console.log(kozak.bribery(1000));
console.log(kozak.bribery(301));
// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)
var PoliticalParty = /** @class */ (function () {
    function PoliticalParty(name, headOfParty, partyPolitician) {
        if (partyPolitician === void 0) { partyPolitician = []; }
        this.name = name;
        this.headOfParty = headOfParty;
        this.partyPolitician = partyPolitician;
    }
    // - додати\видалити депутата з фракції
    PoliticalParty.prototype.addDeputy = function (deputy) {
        return this.partyPolitician.push(deputy);
    };
    PoliticalParty.prototype.deleteDeputy = function (deputy) {
        this.partyPolitician = this.partyPolitician.filter(function (value) {
            return value.name !== deputy.name;
        });
    };
    // - вивести всіх хабарників фракції
    PoliticalParty.prototype.showAllBribers = function () {
        this.partyPolitician.forEach(function (value) {
            if (value.degreeOfHonesty < 50) {
                console.log(value);
            }
        });
    };
    // - вивести найбільшого хабарника у фрації
    PoliticalParty.prototype.showTheBiggestBriber = function () {
        var theBiggestBriber = this.partyPolitician.reduce(function (acc, currentValue) {
            if (acc.degreeOfHonesty > currentValue.degreeOfHonesty)
                acc = currentValue;
            return acc;
        });
        console.log(theBiggestBriber);
    };
    // - вивести фсіх депутатів фракції
    PoliticalParty.prototype.showAllDeputies = function () {
        this.partyPolitician.forEach(function (value) { return console.log(value); });
    };
    return PoliticalParty;
}());
var servant = new PoliticalParty('Servant of the People', brown);
var fatherland = new PoliticalParty('Fatherland', tymoshenko);
var platform = new PoliticalParty('Opposition Platform — For Life', medvedchuk);
var bpp = new PoliticalParty('European Solidarity', poroh);
// як зробити так що очікується неповний обєкт наприклад без масиву депутатів але не використовуючи елвіса
console.log(servant);
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
servant.deleteDeputy(venediktova);
console.log('____________________');
servant.showAllDeputies();
servant.addDeputy(venediktova);
console.log('____________________');
servant.showTheBiggestBriber();
// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір
var VerkhovnaRada = /** @class */ (function () {
    function VerkhovnaRada(chairman, convocation, massMedia, location, parliament) {
        if (parliament === void 0) { parliament = []; }
        this.parliament = parliament;
        this.chairman = chairman;
        this.convocation = convocation;
        this.massMedia = massMedia;
        this.location = location;
    }
    VerkhovnaRada.prototype.addFraction = function (fraction) {
        return this.parliament.push(fraction);
    };
    ;
    VerkhovnaRada.prototype.deleteFraction = function (fraction) {
        this.parliament = this.parliament.filter(function (value) {
            return value.name !== fraction.name;
        });
    };
    ;
    // - вивести всі фракції
    VerkhovnaRada.prototype.showAllFraction = function () {
        this.parliament.forEach(function (value) { return console.log(value); });
    };
    // - вивести конкретну фракцію
    VerkhovnaRada.prototype.showFraction = function (fraction) {
        this.parliament.forEach(function (value) {
            if (value.name == fraction.name) {
                console.log(value);
            }
        });
    };
    // - вивести найбільшого хабарника верховної ради
    VerkhovnaRada.prototype.showTheBiggestBriberAtAll = function () {
        var biggestBribers = [];
        this.parliament.forEach(function (value) {
            var theBiggestAtAll = value.partyPolitician.reduce(function (acc, value) {
                if (acc.degreeOfHonesty > value.degreeOfHonesty)
                    acc = value;
                return acc;
            });
            biggestBribers.push(theBiggestAtAll);
        });
        console.log(biggestBribers);
        var b = biggestBribers.reduce(function (acc, value) {
            if (acc.degreeOfHonesty > value.degreeOfHonesty)
                acc = value;
            return acc;
        });
        console.log(b);
    };
    return VerkhovnaRada;
}());
var VR9 = new VerkhovnaRada(razumkov, 9, 'Voice of Ukraine', 'Constitution Square');
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
