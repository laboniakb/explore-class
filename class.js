// class product {
//     country = 'Bangladesh';
//     speak(talk) {
//         console.log(`Talking about ${talk}`);
//     }
// }

// const laptop = new product();

// laptop.speak('kemon acho')
// console.log(laptop);



// class product {
//     country = 'Bangladesh';
//     nurani(about) {
//         console.log(`Talking about ${about}`);
//     }
// }

// const laptop = new product();

// laptop.nurani('kemon acho')
// console.log(laptop);



// class Teacher {
//     lecture(subject) {
//         console.log(`Sir is Teaching ${subject}`);
//     }
// }
// const teacher = new Teacher();
// teacher.lecture('math');
// teacher.lecture('science');
// teacher.lecture('chemistry');



// class Introduction {
//     constructor(name, hscYear, institute) {
//         this.name = name;
//         this.hscYear = hscYear;
//         this.institute = institute;
//     }
// }
// const intro = new Introduction('Tanjila', 2021, 'BM College');
// console.log(intro);


class Vehicle {
    constructor(brk, speed) {
        this.brk = brk;
        this.speed = speed;
    }
}

class Bus extends Vehicle {
    constructor(brk, speed, wheel, seat) {
        super(brk, speed);
        this.wheel = wheel;
        this.seat = seat;
    }
}
const bus = new Bus(true, true, 4, 45);
console.log(bus);


class Motorcycle extends Vehicle {
    constructor(brk, speed, wheel, seat, fueltank) {
        super(brk, speed);
        this.wheel = wheel;
        this.seat = seat;
        this.fueltank = fueltank;
    }
}
const motor = new Motorcycle(true, true, 4, 45, 1);
console.log(motor);




