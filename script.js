/*let myWeight = document.getElementById('my-weight');
let myHeight = document.getElementById('my-height');

Function myFunction() {
    if(myWeight.value <= 0 || myHeight.value <= 0){
        alert("Please enter valid positive values for weight and height.");
        return;
    }

}
    */

const weight = document.getElementById("my-weight");
  const heightCm = document.getElementById("my-height");
const resultDiv = document.getElementById("result")


function myFunction() {

  const weight = parseFloat(document.getElementById("my-weight").value);
  const heightCm = parseFloat(document.getElementById("my-height").value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    alert("Please enter valid positive values for weight and height.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const result = bmi.toFixed(2);

  //update result display
  const resultDiv = document.getElementById("result");
  
    resultDiv.style.color = "orange";
    resultDiv.style.fontSize = "25px";
      resultDiv.style.fontWeight = "600";
    resultDiv.style.marginTop = "20px";
    
    
  resultDiv.textContent = `Your BMI is ${result}`;

}



    function resetButton(){
    weight.value = "";
    heightCm.value = "";
    resultDiv.innerHTML = "";
  
}
    