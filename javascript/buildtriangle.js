//Divs for 2 angles
const firstAngle = document.querySelector(".first-angle");
const secondAngle = document.querySelector(".second-angle");

//User enetered angle
const thirdAngle = document.querySelector(".third-angle");

//Result statement
const result = document.querySelector(".result");

//CheckButton
const checkButton = document.querySelector(".check");

let firstRandomAngle = Math.floor(Math.random() * 80);
let secondRandomAngle = Math.floor(Math.random() * 80);

function setAngles() {
  firstAngle.innerText = firstRandomAngle;
  secondAngle.innerText = secondRandomAngle;
}

function checkTriangle() {
  let thirdAngleValue = Number(thirdAngle.value);

  let firstAngleValue = Number(firstRandomAngle);
  let secondAnglevalue = Number(secondRandomAngle);

  console.log(thirdAngleValue);

  console.log(firstAngleValue + secondAnglevalue + thirdAngleValue);
  if (thirdAngleValue <= 0) {
    result.innerText = "Please enter valid Angle value";
  } else {
    if (firstRandomAngle + secondRandomAngle + thirdAngleValue === 180) {
      result.innerText = "Correct!! These angles form a triangle";
    } else {
      result.innerText = "Read here 👇 You need some revision.";
    }
  }
}

//Loads two angles
window.addEventListener("load", setAngles);
checkButton.addEventListener("click", checkTriangle);
