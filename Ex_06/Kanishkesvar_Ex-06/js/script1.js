// Function to get query string parameters
function getQueryStringParams() {
    const query = window.location.search.substring(1);
    const params = new URLSearchParams(query);
    return params;
}
// Get the query string parameters;
const queryStringParams = getQueryStringParams();

// Display the information on the page
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");

fname.textContent = queryStringParams.get("fname");
lname.textContent = queryStringParams.get("lname");
dob.textContent = queryStringParams.get("dob");
gender.textContent = queryStringParams.get("Gender");