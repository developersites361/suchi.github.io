let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 34,
        name: 'Сет горячий',
        name1:'Эби темпура ,с лососем, с крабом ,с угрем',

        image: '34.jpg',
        price: 470
    },
    {
        id: 35,
        name: 'Сет запеченный',
        name1:'Запеченный с крабом,запеченный с креветкой,запеченный с курицей,запеченный с мидиями',
        image: '35.JPG',
        price: 490
    },
    {
        id: 36,
        name: 'Жаренный с мидиями',
        name1:'Помидор, соус спайси, мидии, кляр, рис',
        image: '24.jpg',
        price: 555
    },
    {
        id: 37,
        name: 'Жаренный с угрем',
        name1: 'Сыр, огурец, угорь, кляр, сухари',
        image: '25.JPG',
        price: 480
    },
    {
        id: 38,
        name: 'Курасахи',
        name1:'Огурец, курица, помидор, кляр, сухари, рис',
        image: '26.JPG',
        price: 410
    },
    {
        id: 39,
        name: 'Маки с лососем',
        name1: 'Рис, нори, лосось',
        image: '27.JPG',
        price: 240
    },
    {
        id: 40,
        name: 'Маки с огурцом',
        name1: 'Рис, кунжут, огурец, нори',
        image: '28.WEBP',
        price: 180
    },
    {
        id: 41,
        name: 'Маки  с крабом',
        name1: 'Рис, краб, нори',
        image: '29.jpg',
        price: 240
    },
    {
        id: 42,
        name: 'Маки с креветкой',
        name1: 'Рис, креветка',
        image: '30.JPG',
        price: 260
    },
    {
        id: 43,
        name: 'Маки с угрем',
        name1: 'Рис, нори, угорь, соус унаги, кунжут',
        image: '31.JPG',
        price: 240
    },
    {
        id: 44,
        name: 'Темпура Ясой ',
        name1: 'Огурец, помидор, перец, лист салата, кляр, сухари, рис',
        image: '32.JPG',
        price: 390
    },
    {
        id: 45,
        name: 'Эбби Темпура',
        name1: 'Креветка, сыр, масаго, кляр, сухари, рис',
        image: '33.WEBP',
        price: 550
    },
    
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="title">${value.name1}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice =  0 ;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText ="Всего : "+ totalPrice +  " руб ";
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}