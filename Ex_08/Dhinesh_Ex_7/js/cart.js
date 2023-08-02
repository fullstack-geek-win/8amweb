const cartItems = [];
let cartTotal = 0;

// Function to update the cart display

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    cartItemsList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-from-cart');
        removeButton.addEventListener('click', () => removeFromCart(index));
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });
    cartTotalSpan.textContent = `$${cartTotal.toFixed(2)}`;
}

// Function to add item to cart

function addToCart(itemName, itemPrice, quantity) {
    const itemTotal = itemPrice * quantity;
    cartItems.push({ name: itemName, price: itemTotal });
    cartTotal += itemTotal;
    updateCartDisplay();
}

// Function to remove item from cart

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;
    updateCartDisplay();
}

// Add event listeners to "Add to Cart" buttons

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const itemName = button.dataset.item;
        const itemPrice = parseFloat(button.dataset.price);
        const quantityInput = button.parentElement.querySelector('.quantity');
        const quantity = parseInt(quantityInput.value);
        addToCart(itemName, itemPrice, quantity);
    });
});

// Add event listener to "Proceed to Pay" button

const proceedToPayButton = document.getElementById('proceed-to-pay');
proceedToPayButton.addEventListener('click', () => {    
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add items to proceed to payment.');
    } else {
        const addedItemsUrl = encodeURIComponent(JSON.stringify(cartItems));
        const billingAddressUrl = `billing-payment.html?items=${addedItemsUrl}`;
        window.location.href = billingAddressUrl;
    }
});