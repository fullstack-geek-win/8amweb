const queryString = window.location.search;
const params = new URLSearchParams(queryString);


let fname = params.get("fname")
let lname = params.get("lname")
let gender = params.get("gender")
let dob = params.get("dob")
let Email = params.get("Email")
let Mobile = params.get("Mobile")
let fairexp1 = params.get("fairexp")


let o_fname = document.getElementById("fname")
let o_lname = document.getElementById("lname")
let o_gender = document.getElementById("gender")
let o_dob = document.getElementById("dob")
let o_Email = document.getElementById("Email")
let o_Mobile = document.getElementById("Mobile")
let o_fairexp1 = document.getElementById("fairexp")


o_fname.value = fname;
o_lname.value = lname;
o_gender.value = gender;
o_dob.value = dob;
o_Email.value= Email;
o_Mobile.value= Mobile;
o_fairexp.value= fairexp;
