document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.getElementById('cartIcon');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const confirmPurchase = document.getElementById('confirmPurchase');
    let selectedProduct = null;

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.querySelectorAll('.btn-comprar').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            selectedProduct = { name: productName, price: productPrice };
            document.getElementById('modalProductName').innerText = `Produto: ${productName}`;
            document.getElementById('modalProductPrice').innerText = `Preço: R$${productPrice}`;
            modal.style.display = 'block';
        });
    });

    document.querySelectorAll('.btn-adicionar-carrinho').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            saveCart();
            alert(`${productName} foi adicionado ao carrinho.`);
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    confirmPurchase.addEventListener('click', function() {
        if (selectedProduct) {
            alert(`Compra confirmada para ${selectedProduct.name}.`);
            modal.style.display = 'none';
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});