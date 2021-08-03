//Input angles
const angleA = document.querySelector(".angle-a");
const angleB = document.querySelector(".angle-b");
const angleC = document.querySelector(".angle-c");

//Check Button
const checkButton = document.querySelector(".check");

//Output Statement
const result = document.querySelector(".result");

function checkTriangle() {
  let valueA = Number(angleA.value);
  let valueB = Number(angleB.value);
  let valueC = Number(angleC.value);

  console.log(valueA);

  if (valueA || valueB || valueC <= 0) {
    result.innerText = "Please enter valid angles";
  }

  if (valueA + valueB + valueC === 180) {
    result.innerText = "Given angles form a triangle";
  } else {
    result.innerText = "These angles donot form a triangle";
  }
}

checkButton.addEventListener("click", checkTriangle);
