const queryString=window.location.search;
const params=new URLSearchParams(queryString);

//input  querystring


let fname = params.get("fname")
let lname = params.get("lname")
let dob = params.get("dob")
let gender = params.get("gender")

//output values

let o_fname = document.getElementById("fname")
let o_lname = document.getElementById("lname")
let o_dob = document.getElementById("dob")
let o_gender = document.getElementById("gender")

//Assign input to output

o_fname.value = fname;
o_lname.value = lname;
o_dob.value = dob;
o_gender.value = gender;