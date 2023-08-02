// Get billing information from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const customername = urlParams.get('name');
const address = urlParams.get('address');
const city = urlParams.get('city');
const zipcode = urlParams.get('zipcode');
const contactNumber = urlParams.get('contactNumber');

// Get cart items from URL parameters
const cartItemsParam = urlParams.get('items');
let cartItems = [];
if (cartItemsParam) {
    cartItems = JSON.parse(decodeURIComponent(cartItemsParam));
}

// Display billing information
document.getElementById('name').textContent = customername;
document.getElementById('address').textContent = address;
document.getElementById('city').textContent = city;
document.getElementById('zipcode').textContent = zipcode;
document.getElementById('contact-number').textContent = contactNumber;

// Display order details
const orderItemsList = document.getElementById('order-items');
const orderTotalSpan = document.getElementById('order-total');
let orderTotal = 0;
cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    orderItemsList.appendChild(li);
    orderTotal += item.price;
});
orderTotalSpan.textContent = `$${orderTotal.toFixed(2)}`;


document.addEventListener('DOMContentLoaded', function () {
    const continueShoppingBtn = document.querySelector('.continue-shopping');
    continueShoppingBtn.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});