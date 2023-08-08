function convert() {
    let measureVal = document.getElementById("measure");
    switch (measureVal.value) {
        case "ctoi":
            ctoiconvert();
            break;
        case "ctom":
            ctomconvert();
            break;
        case "itoc":
            itocconvert();


    }
}

function ctomconvert() {
    let cmVal = document.getElementById("txtInput");
    let metval = document.getElementById("result");
    metval.innerHTML = (cmVal.value * 0.01).toFixed(2) + "METER"

}
function itocconvert() {
    let incval = document.getElementById("txtInput");
    let cval = document.getElementById("result");
    cval.innerHTML = (incval.value * 2.54).toFixed(3) + "cm"
}


function ctoiconvert() {
    let cmVal = document.getElementById("txtInput");
    let inchVal = document.getElementById("result");
    if (isNaN(cmVal.value))
        inchVal.innerHTML = "Not a Number";
    else
        inchVal.innerHTML = (cmVal.value * 0.393701).toFixed(7) + " Inches";
}

