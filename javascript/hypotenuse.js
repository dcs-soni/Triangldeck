//Two angles
const firstAngle = document.querySelector(".angle-a");
const secondAngle = document.querySelector(".angle-b");

//Calculate Button
const calculateButton = document.querySelector(".check");

//Result
const result = document.querySelector(".result");

function calculateHypotenuse() {
  let firstAngleValue = Number(firstAngle.value);
  let secondAngleValue = Number(secondAngle.value);

  if(firstAngleValue === 0 || secondAngleValue === 0) {
    result.style.display = "block";
    result.innerText = "Please enter valid angle values";
  } else {
    let square = firstAngleValue ** 2 + secondAngleValue ** 2;
    let hypotenuse = Math.sqrt(square);
  
    result.style.display = "block";
  
    result.innerText = `Hypotenuse is ${Math.round(hypotenuse, 2)}`;
  }
  
}

calculateButton.addEventListener("click", calculateHypotenuse);
