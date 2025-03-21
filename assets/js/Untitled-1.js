// Seleciona os elementos do modal
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const confirmPurchase = document.getElementById("confirmPurchase");

// Função para abrir o modal
function openModal(productName, productPrice) {
    document.getElementById("modalProductName").innerText = productName;
    document.getElementById("modalProductPrice").innerText = productPrice;
    modal.style.display = "block";
}

// Função para fechar o modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adiciona evento de clique aos botões de comprar
const buyButtons = document.querySelectorAll('.btn-comprar');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.produto-nome').innerText;
        const productPrice = this.parentElement.querySelector('.descricao').innerText;
        openModal(productName, productPrice);
    });
});

// Adiciona evento de clique ao botão de confirmar compra
confirmPurchase.onclick = function() {
    alert("Compra confirmada!"); // Aqui você pode adicionar a lógica para finalizar a compra
    modal.style.display = "none"; // Fecha o modal após a confirmação
}

