const queryString=window.location.search;
const params= new URLSearchParams(queryString);

let fname = params.get("fname")
let lname = params.get("lname")
let gender = params.get("gender")
let dob = params.get("dob")

let o_fname = document.getElementById("fname")
let o_lname = document.getElementById("lname")
let o_gender = document.getElementById("gender")
let o_dob = document.getElementById("dob")

o_fname.value = fname;
o_lname.value = lname;
o_gender.value = gender;
o_dob.value = dob;
