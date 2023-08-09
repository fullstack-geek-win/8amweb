
//convert function for measure

function convert(){
   let measureVal =document.getElementById("measure");
   switch(measureVal.value){
      case "ctom":
         ctomconvert();
         break;
         case "ctoi":
            ctoiconvert();
            break;
            case "ctof":
              ctofconvert();
              break;

   }

}
//centimetrt to meter convert function

function ctomconvert(){
   let cmVal= document.getElementById("txtInput");
   let mVal=document.getElementById("result");
   if(isNaN(cmVal.value))
   mVal.innerHTML="not a number";
else
mVal.innerHTML=(cmVal.value * 0.01).toFixed(3)+"Meters";
}

//centimeter to inch convert function

function ctoiconvert(){
   let cmVal= document.getElementById("txtInput");
   let inchVal=document.getElementById("result");
   if(isNaN(cmVal.value))
   inchVal.innerHTML="not a number";
else
inchVal.innerHTML=(cmVal.value * 0.393701).toFixed(3)+"Inches";
}

//centimeter to foot convert function

function ctofconvert(){
   let cmVal= document.getElementById("txtInput");
   let feVal=document.getElementById("result");
   if(isNaN(cmVal.value))
   feVal.innerHTML="not a number";
else
feVal.innerHTML=(cmVal.value *0.0328084).toFixed(3)+"feet";
}