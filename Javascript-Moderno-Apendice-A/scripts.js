const printTitle = (title) => console.log(`\n\t${title}\n`); 

// 1 - var, let e const
printTitle("1 - var, let e const")
var x = 10;
var y = 15;
if (y > 10) {
    var x = 5;
    console.log(x); // Imprime o valor 5
}
console.log(x); // Imprime o valor 5

let a = 10;
let b = 15;
if (b > 10) {
    let a = 5
    console.log(a); // Imprimir 5
}
console.log(a); // Imprimir 10

function logName() {
    const name = "Arthur";
    console.log(name); // Imprime Arthur
}

logName();

const name = "Detomi";
console.log(name);

// 2 - Arrow function
printTitle("2 - Arrow function")
const sum = function sum(x, y) {
    return x + y;
};

const arrowSum = (x, y) => x + y;

console.log(sum(5, 5));
console.log("ArrowSum => " + arrowSum(5, 5));

const greeting = (name) => (name) ? "Olá " + name + "!" : "Olá!";

console.log(greeting("Geraldovisk"));
console.log(greeting())

const testArrow = () => console.log("testou");

testArrow();

const user = {
    name: "Arthur",
    sayUserName() {
        // Sem a arrow function seria necessário bindar o this
        var self = this;
        setTimeout(function () {
            console.log(self);
            // irá referenciar a window, pois function está dentro de window 
            console.log(this)
            console.log("Username: " + self.name);
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log("Username: " + this.name);
        }, 500)
    }
}

// user.sayUserName();
// user.sayUserNameArrow();

// 3 - Filter
printTitle("3 - Filter")
const print = (string) => console.log(string);


const array = [1, 2, 3, 4, 5]
const highNumber = array.filter((x) => x > 2);
print(array)
print(highNumber)

const users = [
    { name: "A", available: false },
    { name: "B", available: true },
    { name: "C", available: false },
    { name: "D", available: true },
    { name: "E", available: true },
    { name: "F", available: false },
    { name: "G", available: true }
];

print(users);

const availableUsers = users.filter((user) => user.available);
print(availableUsers);
// 4 - Map
printTitle("4 - Map")
const listNameUsers = users.map((user) => user.name);
print(listNameUsers);

users.map((user) => {
    user.lastName = "Detomi";
})
print(users);

// 5 - Concatenar variaveis -Template Literals
print("\n\t5 - Concatenar variaveis -Template Literals\n")
const arthurName = "Arthur";
const age = 22;

print(`Ola ${arthurName}, você tem ${age} anos`);

// 6 - Destructuring
printTitle("6 - Destructuring")
const fruits = ["Maca", "Laranja", "Pera", "Melancia"];

const [f1, f2, f3, f4] = fruits;

print(f1);
print(f2);

const productsDetails = {
    name: "Mouse",
    price: 49.99,
    category: "Periféricos",
    color: "Cinza"
};

const { name: productName, price, category: productCategory, color} = productsDetails;

print(`Nome do produto é ${productName}, Categoria: ${productCategory},Preço = R$ ${price}`)

// 7 - Spread Operator
printTitle("7 - Spread Operator")
const a1 =  [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2]
print(a3)

const a4 = [0, ...a1, 4];
print(a4);

const carName = {name: "Gol"};
const carBrand = {brand: "VW"};
const otherInfos = {km: 10000, price: 49000};

const car = {...carName, ...carBrand, ...otherInfos}
print(car)

// 8 - classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }

    toString() {
        return `Nome: ${this.name}, Price: ${this.price}`
    }
};  

const shirt = new Product("Camisa gola V", 20);
print(shirt.name)
print(shirt.productWithDiscount(10))
print(shirt.productWithDiscount(50))

const shoes = new Product("Tenis verde", 120);
print(shirt.toString())
// 9 - Herança
printTitle("9 - Herança")
class ProductWithAttributtes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        this.colors.forEach(color => {
            print(color)
        });
    }
}

const hat = new ProductWithAttributtes("Chapeu", 29.99, ["Preto", "Azul"]);
print(hat.toString());
hat.showColors();