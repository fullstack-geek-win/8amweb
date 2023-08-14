
//convert function for measure

function convert(){
    let measureVal =document.getElementById("measure");
    let inputVal = document.getElementById("txtInput");
    let resultVal = document.getElementById("result");
    switch(measureVal.value){
       case "ctom":
          ctomconvert(inputVal,resultVal);
          break;
          case "ctoi":
             ctoiconvert(inputVal,resultVal);
             break;
             case "ctof":
               ctofconvert(inputVal,resultVal);
               break;
 
    }
 
 }
/*validation this is only for to give a characters its
 shows a "not a number" input other wise you don't want this remove it"*/

 function validation(input, result){
    if(isNaN(input.value)){
        result.innerHTML="not a number";
        return false;
    }
    else
    return true;}



 //centimetrt to meter convert function
 
 function ctomconvert(inputVal, resultVal){
    
    if(validation(inputVal,resultVal)){
        resultVal.innerHTML=(inputVal.value *0.01).toFixed(3)+"meters";

    }
    
 }
 
 //centimeter to inch convert function
 
 function ctoiconvert(inputVal, resultVal){
    
    if(validation(inputVal,resultVal)){
    resultVal.innerHTML=(inputVal.value * 0.393701).toFixed(3)+"Inches";}
 
 }
 
 //centimeter to feet convert function
 
 function ctofconvert(inputVal, resultVal){
    
    if(validation(inputVal,resultVal)){
        resultVal.innerHTML=(inputVal.value *0.0328084).toFixed(3)+"feet";}
    }
 
 