export { products, split };

/* class Pizza {
    constructor(img, name, info, price) {
        this.img = img;
        this.name = name;
        this.info = info;
        this.price = price;
    }
}



let Bennazianna = new Pizza("src='./assets/img/Photo Menu (11).png'", "Bennazianna", "La más completa", "$3650");

let mrPit 

console.log(Bennazianna) */


let products = [{img: "./assets/img/Photo Menu (11).png", name: "Bennazianna", info: "La más completa", price: "$3650", category: "pizzas"},

{img: "./assets/img/mr.pit.png", name: "La Mr. Pit", info: "Solo para expertos", price: "$350", category: "pizzas"},

{img: "./assets/img/Photo Menu (12).png", name: "Tronco-Pizza", info: "Para todo el día", price: "$870", category: "pizzas"},

{img: "./assets/img/Photo Menu (3).png", name: "Papas | Provenzal", info: "Van como piña", price: "$360", category: "napapuki"}, 

{img: "./assets/img/Photo Menu (11).png", name: "¡Q’ Jamone!", info: "c/jamón crudo", price: "$350", category: "pizzas"},

{img: "./assets/img/Photo Menu (11).png", name: "La Charly García", info: "¡BASTA!", price: "$380", category: "pizzas"},

{img: "./assets/img/Photo Menu (11).png", name: "La Maradona", info: "¡Eterna!", price: "$450", category: "hamburguesas"},

{img: "./assets/img/Photo Menu (11).png", name: "Picantovich", info: "Pica 2 veces", price: "$750", category: "hamburguesas"},

{img: "./assets/img/Photo Menu (11).png", name: "La Hasbulla", info: "En honor al 1", price: "$990", category: "pizzas"},

{img: "./assets/img/Photo Menu (11).png", name: "Leo Messi", info: "¡De pié señores!", price: "$10", category: "hamburguesas"},

{img: "./assets/img/Photo Menu (11).png", name: "Nick Gi", info: "La que desaparece", price: "Gratis", category: "pizzas"},

{img: "./assets/img/Photo Menu (11).png", name: "sartadawdaw", info: "La que desaparece", price: "Gratis", category: "mexican-food"},

{img: "./assets/img/Photo Menu (11).png", name: "fefvge", info: "La que desaparece", price: "Gratis", category: "mexican-food"},

{img: "./assets/img/Photo Menu (11).png", name: "234234", info: "La que desaparece", price: "Gratis", category: "batidos"},

{img: "./assets/img/Photo Menu (11).png", name: "11236543", info: "La que desaparece", price: "Gratis", category: "batidos"},

{img: "./assets/img/Photo Menu (11).png", name: "Nhbtr45", info: "La que desaparece", price: "Gratis", category: "pizzas"},

{img: "./assets/img/Photo Menu (11).png", name: "btr56", info: "La que desaparece", price: "Gratis", category: "hamburguesas"},

{img: "./assets/img/Photo Menu (11).png", name: "23456bfdw", info: "La que desaparece", price: "Gratis", category: "batidos"},

{img: "./assets/img/Photo Menu (11).png", name: "987hjf546", info: "La que desaparece", price: "Gratis", category: "napapuki"},

];

/* console.log(products) */



const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < products.length; i += size)
    dividedProducts.push(products.slice(i, i + size));
    return dividedProducts;
};

let split = splitProducts(8);

console.log(split)

