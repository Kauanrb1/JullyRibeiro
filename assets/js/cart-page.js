document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cartTotal');
    const checkoutButton = document.getElementById('checkoutButton');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="assets/img/${item.name}.jpeg" alt="${item.name}">
                <div class="cart-item-details">
                    <p>${item.name}</p>
                </div>
                <div class="cart-item-price">R$${item.price}</div>
                <div class="cart-item-quantity">${item.quantity}</div>
                <button class="cart-item-remove" data-name="${item.name}">Remover</button>
            `;

            cartItemsContainer.appendChild(cartItem);
            total += parseFloat(item.price) * item.quantity;
        });

        cartTotalElement.innerText = total.toFixed(2);
    }

    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('cart-item-remove')) {
            const itemName = event.target.getAttribute('data-name');
            const itemIndex = cart.findIndex(item => item.name === itemName);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            }
        }
    });

    checkoutButton.addEventListener('click', function() {
        alert('Compra finalizada!');
        localStorage.removeItem('cart');
        updateCart();
    });

    updateCart();
});