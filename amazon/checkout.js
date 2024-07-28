document.addEventListener('DOMContentLoaded', function () {
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotalPriceElement = document.getElementById('checkout-total-price');

    function loadCheckout() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        checkoutItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            checkoutItems.appendChild(li);
            totalPrice += item.price;
        });

        checkoutTotalPriceElement.textContent = totalPrice.toFixed(2);
    }

    window.confirmPurchase = function() {
        alert('Purchase confirmed!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    };

    loadCheckout();
});
