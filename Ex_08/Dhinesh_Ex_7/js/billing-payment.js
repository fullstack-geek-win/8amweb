const billingForm = document.getElementById('billing-form');

billingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form input values

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;
    const contactNumber = document.getElementById('contact-number').value;

    // Validate form data

    if (!name.trim() || !address.trim() || !city.trim() || !zipcode.trim() || !contactNumber.trim()) {
        alert('Please fill in all fields before proceeding to payment.');
        return;
    }

    // Get cart items from the URL parameters

    const urlParams = new URLSearchParams(window.location.search);
    const cartItemsParam = urlParams.get('items');

    // Decode the cart items and prices from the URL parameters

    let cartItems = [];
    if (cartItemsParam) {
        cartItems = JSON.parse(decodeURIComponent(cartItemsParam));
    }

    // If cart items exist, build the URL for success page with billing information

    if (cartItems.length > 0) {        
        const cartItemsJson = encodeURIComponent(JSON.stringify(cartItems));
        const successUrl = `order-success.html?name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&city=${encodeURIComponent(city)}&zipcode=${encodeURIComponent(zipcode)}&contactNumber=${encodeURIComponent(contactNumber)}&items=${cartItemsJson}`;
        window.location.href = successUrl;
    } else {
        alert('No cart items found. Please go back to the food menu to select items.');
    }
});