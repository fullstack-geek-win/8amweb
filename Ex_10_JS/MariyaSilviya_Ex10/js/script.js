function result(){
let ipVal = document.getElementById("ip");
switch(ipVal.value)
{
    case "cmtom":
        cmtomconvert();
        break;
    case "mtocm":
        mtocmconvert();
        break;
    case "itof":
        itofconvert();
        break;
    case "ftoi":
        ftoiconvert();
        break;
        
}



function cmtomconvert() {
    let cmVal = document.getElementById("ipv");
    let mVal = document.getElementById("result");
    if(isNaN(cmVal.value)) 
        mVal.innerHTML = "Not a Number";
    else 
        mVal.innerHTML = (cmVal.value * 0.01) + " Meters";
}
function mtocmconvert() {
    let mVal = document.getElementById("ipv");
    let cmVal = document.getElementById("result");
    if(isNaN(mVal.value)) 
        cmVal.innerHTML = "Not a Number";
    else 
        cmVal.innerHTML = (mVal.value * 100) + " Centimeters";
}
function itofconvert() {
    let iVal = document.getElementById("ipv");
    let fVal = document.getElementById("result");
    if(isNaN(iVal.value)) 
        fVal.innerHTML = "Not a Number";
    else 
        fVal.innerHTML = (iVal.value / 12).toFixed("4") +" Foot";
}
function ftoiconvert() {
    let fVal = document.getElementById("ipv");
    let iVal = document.getElementById("result");
    if(isNaN(fVal.value)) 
        iVal.innerHTML = "Not a Number";
    else 
        iVal.innerHTML = (fVal.value * 12) + " Inches";
}

}