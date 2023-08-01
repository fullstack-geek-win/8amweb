// const, let, var
const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// input queryString
let fname = params.get("fname")
let lname = params.get("lname")
let emailid = params.get("emailid")
let password = params.get("password")


// output values
let o_fname = document.getElementById("fname")
let o_lname = document.getElementById("lname")
let o_emailid = document.getElementById("emailid")
let o_password = document.getElementById("password")


//Assign input to output
o_fname.value = fname;
o_lname.value = lname;
o_emailid.value=emailid;
o_password.value=password;
