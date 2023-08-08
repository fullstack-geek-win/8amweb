function result(){
let measureVal = document.getElementById("measure");
switch(measureVal.value){
    case "ctoi":
        ctoiconvert();
        break;
    case "ctom":
        ctomconvert();
        break;
    case "itoc":
        itocconvert();
        break;
    case "mtoc":
        mtocconvert();
        break;
}
function ctomconvert() {
    let cmVal = document.getElementById("txtInput");
    let mVal = document.getElementById("result");
    if(isNaN(cmVal.value)) 
        mVal.innerHTML = "Not a Number";
    else 
        mVal.innerHTML = (cmVal.value * 0.01)+ " Metres";
}
function itocconvert() {
    let inchVal = document.getElementById("txtInput");
    let cmVal = document.getElementById("result");
    if(isNaN(inchVal.value)) 
        cmVal.innerHTML = "Not a Number";
    else 
        cmVal.innerHTML = (inchVal.value * 2.54)+ " Centimeters";
}
function mtocconvert() {
    let mVal = document.getElementById("txtInput");
    let cmVal = document.getElementById("result");
    if(isNaN(mVal.value)) 
        cmVal.innerHTML = "Not a Number";
    else 
        cmVal.innerHTML = (mVal.value * 100)+ " Centimeters";
}

function ctoiconvert() {
    let cmVal = document.getElementById("txtInput");
    let inchVal = document.getElementById("result");
    if(isNaN(cmVal.value)) 
        inchVal.innerHTML = "Not a Number";
    else 
        inchVal.innerHTML = (cmVal.value * 0.393701)+ " Inches";
}
}