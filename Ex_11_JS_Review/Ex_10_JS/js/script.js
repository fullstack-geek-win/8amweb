// measure
let measureVal = document.getElementById("measure");
switch(measureVal.value)
{
    case "ctoi":
        ctoiconvert();
    case "ctom":
        ctomconvert();
    case "itoc":
        itocconvert();
    case "mtoc":
        mtocconvert();
        
}

function ctomconvert() {
    // write centimeter to meter conversion code here..
}
function itocconvert() {
    // write inch to centimeter conversion code here..
}
function mtocconvert() {
    // write meter to centimeter conversion code here..
}

function ctoiconvert() {
    let cmVal = document.getElementById("txtInput");
    let inchVal = document.getElementById("result");
    if(isNaN(cmVal.value)) 
        inchVal.innerHTML = "Not a Number";
    else 
        inchVal.innerHTML = (cmVal.value * 0.393701).toFixed(7) + " Inches";
}

