function result(){
let ipVal = document.getElementById("ip");
let ipv =document.getElementById("ipv");
let r = document.getElementById("result");
switch(ipVal.value)
{
    case "cmtom":
        cmtomconvert(ipv,r);
        break;
    case "mtocm":
        mtocmconvert(ipv,r);
        break;
    case "itof":
        itofconvert(ipv,r);
        break;
    case "ftoi":
        ftoiconvert(ipv,r);
        break;
        
}

function validation(ipv,r)
{
    if(isNaN(ipv.value)){
    r.innerHTML="Not a Number";
    return false;}
    else{
        return true;
    }

}

function cmtomconvert(ipv,r) {
   
    if (validation(ipv,r) ){
        r.innerHTML = (ipv.value * 0.01) + " Meters";}
}
function mtocmconvert(ipv,r) {
   
    if(validation(ipv,r)){
        r.innerHTML = (ipv.value * 100) + " Centimeters";}
}
function itofconvert(ipv,r) {
   
    if(validation(ipv,r)) {
        
        r.innerHTML = (ipv.value / 12).toFixed("4") +" Foot";}
}
function ftoiconvert(ipv,r) {
    
    if(validation(ipv,r)) {
       
        r.innerHTML = (ipv.value * 12) + " Inches";}
}

}