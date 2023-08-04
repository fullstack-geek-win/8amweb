const querystring = window.location.search;
const params = new URLSearchParams(querystring);


let Cardnumber = params.get("Cardnumber")
let Expyear= params.get("Expyear")
let CVV = params.get("CVV")

let name = params.get("name")


let o_Cardnumber = document.getElementById("Cardnumber")
let o_Expyear = document.getElementById("Expyear")
let o_CVV = document.getElementById("CVV")
let o_name = document.getElementById("name")

o_Cardnumber.value = Cardnumber;
o_Expyear.value = Expyear;
o_CVV.value = CVV;
o_name.value = name;
