//Boxes at landing page of trivia
const areaTwoSides = document.querySelector(".area-normal");
const areaHerons = document.querySelector(".area-herons");
const areaSas = document.querySelector(".area-sas");

//Boxes Container
const mainContainer = document.querySelector(".main-container");

///Calculate buttonns

//Only for section - area with two sides
const displayTwoSidesContainer = document.querySelector(
  ".display-twosides-container"
);
const calculateTwoSidesButton = document.querySelector(".calculate-twosides");
//Inputs
const base = document.querySelector(".base");
const height = document.querySelector(".height");

//Only for section - Area with Herons
const displayHeronsContainer = document.querySelector(
  ".display-herons-container"
);
const calculateHeronsButton = document.querySelector(".calculate-herons");
//Inputs
const sideA = document.querySelector(".sideA");
const sideB = document.querySelector(".sideB");
const sideC = document.querySelector(".sideC");

//Only for section - Area using SaS
const displaySasContainer = document.querySelector(".display-sas-container");
const calculateSasButton = document.querySelector(".calculate-sas");
//Inputs
const firstSide = document.querySelector(".first-side");
const secondSide = document.querySelector(".second-side");
const oneAngle = document.querySelector(".one-angle");

//Result Statement
const result = document.querySelector(".result");

function hideBoxesOfTrivia() {
  //Hides the boxes of landing page of trivia.html
  areaTwoSides.style.display = "none";
  areaHerons.style.display = "none";
  areaSas.style.display = "none";
  mainContainer.style.margin = "0rem";
}

function showAreaTwoSidesContainer() {
  hideBoxesOfTrivia();
  displayTwoSidesContainer.style.display = "flex";
}

function showAreaHeronsContainer() {
  hideBoxesOfTrivia();
  displayHeronsContainer.style.display = "flex";
}

function showSasContainer() {
  hideBoxesOfTrivia();
  displaySasContainer.style.display = "flex";
}

// Function to calculate area if two sides are given
function calculateAreaTwoSides() {
  let baseValue = Number(base.value);
  let heightValue = Number(height.value);

  let area = (1 / 2) * baseValue * heightValue;
  // console.log(area);
  result.style.display = "block";
  result.innerText = `Area of the triangle is ${area}`;
}

//Function to calculate area using Herons
function calculateAreaHerons() {
  let sideAValue = Number(sideA.value);
  let sideBValue = Number(sideB.value);
  let sideCValue = Number(sideC.value);

  if (
    sideAValue + sideBValue > sideCValue &&
    sideBValue + sideCValue > sideAValue &&
    sideCValue + sideAValue > sideBValue
  ) {
    let semiPerimeter = (sideAValue + sideBValue + sideCValue) / 2;
    console.log(semiPerimeter);
    let areaHerons = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - sideAValue) *
        (semiPerimeter - sideBValue) *
        (semiPerimeter - sideCValue)
    );

    result.style.display = "block";
    result.innerText = `Area of the triangle is ${areaHerons}`;
  } else {
    result.style.display = "block";
    result.innerText =
      "Invalid Angles. The sum of one of the 2 angles must be greater than third angle";
  }
}

//Function to calculate area using SAS
function calculateAreaSas() {
  let firstSideValue = Number(firstSide.value);
  let secondSideValue = Number(secondSide.value);
  let oneAngleValue = Math.sin((Number(oneAngle.value) * Math.PI) / 180);

  console.log(oneAngleValue);

  if (-1 <= oneAngleValue <= 1 && firstSideValue > 1 && secondSideValue > 1) {
    let areaSas = (1 / 2) * (firstSideValue * secondSideValue * oneAngleValue);

    result.style.display = "block";
    result.innerText = `Area of the triangle is ${Math.round(areaSas, 2)}`;
  }
}

areaTwoSides.addEventListener("click", showAreaTwoSidesContainer);
areaHerons.addEventListener("click", showAreaHeronsContainer);
areaSas.addEventListener("click", showSasContainer);

calculateTwoSidesButton.addEventListener("click", calculateAreaTwoSides);
calculateHeronsButton.addEventListener("click", calculateAreaHerons);
calculateSasButton.addEventListener("click", calculateAreaSas);
