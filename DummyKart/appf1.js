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
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'f1.jpg',
        price: 299
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'f2.jpg',
        price: 249
    },
    {
        id: 3,
        name: 'Shirt',
        image: 'f3.jpg',
        price: 349
    },
    {
        id: 4,
        name: 'Lykra texture shirt',
        image: 'f4.jpg',
        price: 199
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'f5.jpg',
        price: 599
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'f6.jpg',
        price: 637
    },
    {
        id: 7,
        name: 'designer plazo for women',
        image: 'f7.jpg',
        price: 739
    },
    {
        id: 8,
        name: 'women top ',
        image: 'f8.jpg',
        price: 189
    },
    {
        id: 9,
        name: 'PRODUCT NAME 8',
        image: 'n1.jpg',
        price: 1999
    },
    {
        id: 10,
        name: 'PRODUCT NAME 8',
        image: 'n2.jpg',
        price: 549
    },
    {
        id: 11,
        name: 'PRODUCT NAME 8',
        image: 'n3.jpg',
        price: 249
    },
    {
        id: 12,
        name: 'half sleve shirt for men',
        image: 'n4.jpg',
        price: 180
    },
    {
        id: 13,
        name: 'PRODUCT NAME 8',
        image: 'n5.jpg',
        price: 189
    },
    {
        id: 14,
        name: 'PRODUCT NAME 8',
        image: 'n6.jpg',
        price: 1111
    },
    {
        id: 15,
        name: 'PRODUCT NAME 8',
        image: 'n7.jpg',
        price: 899
    },
    {
        id: 16,
        name: 'PRODUCT NAME 8',
        image: 'n8.jpg',
        price: 1299
    }
    

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
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
    let totalPrice = 0;
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
    total.innerText = totalPrice.toLocaleString();
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