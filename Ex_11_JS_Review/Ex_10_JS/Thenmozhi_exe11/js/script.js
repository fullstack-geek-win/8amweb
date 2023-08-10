function solution(){
let measureVal = document.getElementById("measure");
switch(measureVal.value)
{
    case "cmtom":
        cmtomconvert();
        break;
    case "cmtoi":
        cmtoiconvert();
        break;
    case "mtocm":
         mtocmconvert();
         break;
    case "itocm":
          itocmconvert();
          break;
}
function cmtomconvert(){
    let cmVal = document.getElementById("txtInput");
    let mVal = document.getElementById("solution");
    if(isNaN(cmVal.value)) 
    mVal.innerHTML = "Not a Number";
else 
    mVal.innerHTML = (cmVal.value*0.01).toFixed(3) +"m"
}
function cmtoiconvert(){
    let cmVal = document.getElementById("txtInput");
    let iVal = document.getElementById("solution");
    if(isNaN(cmVal.value)) 
    iVal.innerHTML = "Not a Number";
else   
    iVal.innerHTML=(cmVal.value*0.393701).toFixed(3) +"i"
}
function mtocmconvert(){
    let mVal = document.getElementById("txtInput");
    let cmVal = document.getElementById("solution");
    if(isNaN(mVal.value)) 
    cmVal.innerHTML = "Not a Number";
else 
    cmVal.innerHTML=(mVal.value*100).toFixed(3) +"cm"
}
function itocmconvert(){
    let iVal = document.getElementById("txtInput");
    let cmVal = document.getElementById("solution");
    if(isNaN(iVal.value)) 
    cmVal.innerHTML = "Not a Number";
else 
    cmVal.innerHTML=(iVal.value*2.54).toFixed(3) +"cm"
}
}
