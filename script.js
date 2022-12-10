// 1	Имеется класс «Toy», позволяющий создавать объекты со следующими характеристиками:
//  название игрушки, рекомендуемый возраст
//   (3+, 6+, 8+, 10+, 12+) и цена.
// Создайте объект этого класса

let Toy = {
    igrushka1: {
        name: "Самолет",
        limitation: "3+",
        price: 200,
    },
    igrushka2: {
        name: "мягкая игрушка Акула",
        limitation: "6+",
        price: 1000,
    },
    igrushka3: {
        name: "пистолет(на присосках)",
        limitation: "8+",
        price: 500,
    },
    igrushka4: {
        name: "машинка на пульте управления",
        limitation: "10+",
        price: 3000,
    },
    igrushka5: {
        name: "Лего Город",
        limitation: "12+",
        price: 15000,
    },
}
console.log(Toy)
// Создайте класс «Car» (марка машины, год выпуска и цена) двумя способами.
// Переопределите метод toString, позволяющий выводить полную информацию об автомобиле.
// Подготовьте геттер, определяющий «возраст» автомобиля 
// Продемонстрируйте работу с объектами этого класса..
// 	создайте массив из объектов класса (не менее 4 объектов);
// 	отсортируйте элементы массива по году выпуска в порядке возрастания;
// 	обеспечьте вывод информации об автомобилях выбранной марки;
// 	обеспечьте вывод информации о самых «старых» автомобилях с указанием их количества.

// синтаксический сахар
// class Car {
//     constructor(mark,data,price){
//         this.mark = mark;
//         this.data = data;
//         this.price = price;
//     }
//     get toString(){
//         return `${this.mark} - марка <br> ${this.data} - год выпуска <br> ${this.price} - Цена`
//     }
// }
// Функция конструктор
let massCar = [
    new Car("toyouta",2017,700000),
    new Car("nissan",2011,200000),
    new Car("lada",2015,500000),
    new Car("bmv",2014,400000),
]
function Car(mark, data, price) {
    this.mark = mark;
    this.data = data;
    this.price = price;
}
const carMethods = {
    toString(){
        return `${this.mark} - марка, ${this.data} - год выпуска, ${this.price} - Цена`
    },
};
Object.assign(Car.prototype, carMethods);
Object.defineProperties(Car.prototype, {
    carAge:{get() {return new Date().getFullYear - this.data}},
});
let res = massCar.filter(item => item.data)
res.sort((a, b) => a.data - b.data)
res.forEach(item => console.log(item.toString()));
let arrSearchCar = "nissan";//какую марку хотите найти
let searchID = massCar.find(car => car.mark === arrSearchCar)
console.log(`поиск авто ${searchID}`)
// по старости до 2015 года
massCar.forEach(item =>{
    if(item.data<2015){
        console.log(item)
    }
})