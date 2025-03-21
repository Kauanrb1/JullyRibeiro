document.addEventListener('DOMContentLoaded', function() {
    const productNameElement = document.getElementById('productName');
    const productImageElement = document.getElementById('productImage');
    const productDescriptionElement = document.getElementById('productDescription');
    const productPriceElement = document.getElementById('productPrice');
    const buyButton = document.getElementById('buyButton');
    const addToCartButton = document.getElementById('addToCartButton');

    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        productNameElement.innerText = product.name;
        productImageElement.src = `assets/img/${product.name}.jpeg`;
        productDescriptionElement.innerText = product.description;
        productPriceElement.innerText = product.price;

        buyButton.addEventListener('click', function() {
            alert(`Compra confirmada para ${product.name}.`);
        });

        addToCartButton.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cart.find(item => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: product.name, price: product.price, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.name} foi adicionado ao carrinho.`);
        });
    }
});