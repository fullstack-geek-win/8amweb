function conve() {
  var selectUnit = document.getElementById("matrix").value;
  var fromUnit = document.getElementById("inputtxt").value;

  var toUnit = document.getElementById("outputtxt");
  if (selectUnit == "cm") {
    toUnit.value = (fromUnit / 0.3937).toFixed(3);
  } else if (selectUnit == "foot") {
    toUnit.value = (fromUnit * 0.032808).toFixed(3);
  } else if (selectUnit == "mtr") {
    toUnit.value = (fromUnit / 3.2808).toFixed(3);
  } else if (selectUnit == "km") {
    toUnit.value = (fromUnit * 1000).toFixed(3);
  } else {
    toUnit.value = (fromUnit * 0.62137).toFixed(3);
  }
}

function conver() {
  var selectUnit3 = document.getElementById("matrix1").value;
  var selectUnit4 = document.getElementById("matrix2").value;
  var fromUnit1 = document.getElementById("inputtxt1").value;

  var toUnit1 = document.getElementById("outputtxt1");

  if (selectUnit3 == "inch" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.39370).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*0.083333).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/39.370).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/39370).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.000015783).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*1).toFixed(3);
  }
 else if (selectUnit3 == "cm" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*0.032808).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/100).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/100000).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.0000062137).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*0.39370).toFixed(3);
  } 
  else if (selectUnit3 == "foot" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.032808).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/3.2808).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/3280.8).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.00018939).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*12).toFixed(3);
  }
  else if (selectUnit3 == "mtr" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.01).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*3.2808).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/1000).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.00062137).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*39.370).toFixed(3);
  }
  
  else if (selectUnit3 == "km" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1*100000).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*3280.8).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1*1000).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.62137).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*39370).toFixed(3);
  }
  else if (selectUnit3 == "mil" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.0000062137).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*5280).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/0.00062137).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/0.62137).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*63360).toFixed(3);
  }
  else {
    alert("Error");
  }
}

function conver1() {
  var selectUnit3 = document.getElementById("matrix1").value;
  var selectUnit4 = document.getElementById("matrix2").value;
  var fromUnit1 = document.getElementById("outputtxt1").value;

  var toUnit1 = document.getElementById("inputtxt1");

  if (selectUnit3 == "inch" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.39370).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*0.083333).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/39.370).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/39370).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.000015783).toFixed(3);
  } else if (selectUnit3 == "inch" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*1).toFixed(3);
  }
 else if (selectUnit3 == "cm" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*0.032808).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/100).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/100000).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.0000062137).toFixed(3);
  } else if (selectUnit3 == "cm" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*0.39370).toFixed(3);
  } 
  else if (selectUnit3 == "foot" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.032808).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/3.2808).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/3280.8).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.00018939).toFixed(3);
  } else if (selectUnit3 == "foot" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*12).toFixed(3);
  }
  else if (selectUnit3 == "mtr" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.01).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*3.2808).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/1000).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.00062137).toFixed(3);
  } else if (selectUnit3 == "mtr" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*39.370).toFixed(3);
  }
  
  else if (selectUnit3 == "km" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1*100000).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*3280.8).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1*1000).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*0.62137).toFixed(3);
  } else if (selectUnit3 == "km" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*39370).toFixed(3);
  }
  else if (selectUnit3 == "mil" && selectUnit4 == "cm") {
    toUnit1.value = (fromUnit1/0.0000062137).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "foot") {
    toUnit1.value = (fromUnit1*5280).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "mtr") {
    toUnit1.value = (fromUnit1/0.00062137).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "km") {
    toUnit1.value = (fromUnit1/0.62137).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "mil") {
    toUnit1.value = (fromUnit1*1).toFixed(3);
  } else if (selectUnit3 == "mil" && selectUnit4 == "inch") {
    toUnit1.value =(fromUnit1*63360).toFixed(3);
  }
  else {
    alert("Error");
  }
}
function clr(){
 document.getElementById("inputtxt").value="0.00";
 document.getElementById("outputtxt").value="0.00";
 
}
function clr1(){
  document.getElementById("inputtxt1").value="0.00";
 document.getElementById("outputtxt1").value="0.00";
}
