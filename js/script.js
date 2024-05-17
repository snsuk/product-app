function addToCart() {
    alert('Товар успешно добавлен в корзину!');
}

function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

