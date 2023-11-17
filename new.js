document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');
    const cartIcon = document.getElementById('cartIcon');
    const sortSelect = document.getElementById('sort');
    let cartIDcounter = 1;

    sortSelect.addEventListener('change', function () {
        const sortBy = sortSelect.value;
        sortProducts(sortBy);
    });

    productList.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.getAttribute('data-product-id');
            addToCart(productId);
            updateCartVisibility(true);
        }
    });

    productList.addEventListener('click', function (event) {
        if (event.target.classList.contains('test')) {
            const productId = event.target.getAttribute('data-product-id');
            addToCart(productId);
            updateCartVisibility(true);
        }
    });

    cartIcon.addEventListener('click', function () {
        toggleCart();
    });

    cartList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const cartItemId = event.target.parentElement.id;
            removeFromCart(cartItemId);
        }
    });


    function sortProducts(sortBy) {
        const products = Array.from(productList.children);

        products.sort(function (a, b) {
            const aName = a.querySelector('h3').textContent.toLowerCase();
            const bName = b.querySelector('h3').textContent.toLowerCase();
            const aPrice = parseFloat(a.querySelector('.price').textContent.slice(1));
            const bPrice = parseFloat(b.querySelector('.price').textContent.slice(1));

            if (sortBy === 'name-asc') {
                return aName.localeCompare(bName);
            } else if (sortBy === 'name-desc') {
                return bName.localeCompare(aName);
            } else if (sortBy === 'price-asc') {
                return aPrice - bPrice;
            } else if (sortBy === 'price-desc') {
                return bPrice - aPrice;
            }
        });

        productList.innerHTML = '';
        products.forEach(function (product) {
            productList.appendChild(product);
        });
    }

    function addToCart(productId) {
        const product = document.getElementById(productId);
        const productID = 'cartId'+ cartIDcounter++;

        const cartItem = document.createElement('li');
        cartItem.textContent = product.querySelector('h3').textContent + ' - ' + product.querySelector('.price').textContent;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.classList.add('remove-from-cart');
        cartItem.appendChild(removeButton);

        cartItem.setAttribute('id',productID)
        cartItem.classList.add('cart-item');
        cartList.appendChild(cartItem);
    }

    function toggleCart() {
        console.log('Toggle cart called');
        updateCartVisibility();
    }

    function removeFromCart(cartItemId) {
        const cartItem = document.getElementById(cartItemId);
        cartList.removeChild(cartItem);
        updateCartVisibility();
    }


    function updateCartVisibility(toggle = false) {
        console.log('Update cart visibility called');
        if (toggle) {
            console.log('test1');
            cartList.classList.add('hidden');
            cartList.classList.remove('visble');
        } else {
            cartList.classList.remove('hidden');
            cartList.classList.add('visble');
            console.log('test2');
        }
    }
});