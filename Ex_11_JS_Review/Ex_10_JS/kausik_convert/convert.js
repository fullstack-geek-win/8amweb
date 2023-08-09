var measureVal = document.getElementById("measure");
var inputVal = document.getElementById("txtInput");
var resultVal = document.getElementById("result");

resultVal.innerHTML = "Converter Program"

function convert() {

    switch (measureVal.value) {
        case "ctoi":
            ctoiconvert(inputVal, resultVal);
            break;
        case "ctom":
            ctomconvert(inputVal, resultVal);
            break;
        case "itoc":
            itocconvert(inputVal, resultVal);
    }
}

function validation(input, output) {
    if (isNaN(input.value)) {
        output.innerHTML = "Not a Number";
        return false;
    }
    else
        return true;
}

function itocconvert(input1, result1) {
    if (validation(input1, result1)) {
        result1.innerHTML = (input1.value * 2.54).toFixed(3) + " CM"
        // resultVal.innerHTML = inputVal.value * 2.54;
        // resultVal.innerHTML = parseFloat(resultVal.innerHTML).toFixed(3);
        // resultVal.innerHTML = resultVal.innerHTML + " CM";
        // resultVal.innerHTML += " CM";
    }
}

function ctomconvert(input2, result2) {
    if (validation(input2, result2)) {
        result2.innerHTML = (input2.value * 0.01).toFixed(2) + " METER"
    }
}

function ctoiconvert(input6, resul6) {
    // if (validation(input6, resul6)) {
    //     resul6.innerHTML = (input6.value * 0.393701).toFixed(7) + " Inches"
    // }
    return (input6.value * 0.393701).toFixed(7) + " Inches";
}