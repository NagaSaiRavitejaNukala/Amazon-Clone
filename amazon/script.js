const imgs = document.querySelectorAll('#slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}

changeSlide();

prev_btn.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener("click", (e) => {
    if (n < imgs.length-1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})


const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
    item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
});
}

let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
}

