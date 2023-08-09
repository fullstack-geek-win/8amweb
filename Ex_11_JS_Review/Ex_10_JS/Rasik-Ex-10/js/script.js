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
    }
    function validation(input,result){
        if(isNaN(input.value)) {
        result.innerHTML = "Not a Number";
        return false;
        }
        else
            return true;
    }
    function ctoiconvert() {
        let inputval = document.getElementById("txtInput");
        let resultval = document.getElementById("result");
        if(validation(inputval,resultval)){
            resultval.innerHTML = (inputval.value * 0.393701).toFixed(4) + " Inches";
    }
}
    function ctomconvert() {
        let inputval = document.getElementById("txtInput");
        let resultval = document.getElementById("result");
        if(validation(inputval,resultval)){
        resultval.innerHTML = (inputval.value * 0.01).toFixed(5) + " Metres";
    }
    }
    function itocconvert() {
        let inputval = document.getElementById("txtInput");
        let resultval = document.getElementById("result");
        if(validation(inputval,resultval)){
            resultval.innerHTML = (inputval.value * 2.54).toFixed(4)+ " Centimeters";
    }
    }
    function mtocconvert() {
        let inputval = document.getElementById("txtInput");
        let resultval = document.getElementById("result");
        if(validation(inputval,resultval)){
            resultval.innerHTML = (inputval.value * 100).toFixed(6) + " Centimeters";
    }
    }
  
    