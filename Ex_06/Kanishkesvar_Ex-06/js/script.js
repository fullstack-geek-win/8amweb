const querystring = window.location.search;
const params = new URLSearchParams(querystring);
//input
let fname=params.get("fname");
let lname=params.get("lname");
//output
let o_fname=document.getElementById("fname");
let o_lname=document.getElementById("lname");
//Assign input to output
o_fname.value=fname;
o_lname.value=lname;