//Boxes at landing page of trivia
const areaTwoSides = document.querySelector(".area-normal");
const areaHerons = document.querySelector(".area-herons");
const areaSas = document.querySelector(".area-sas");

//Boxes Container
const mainContainer = document.querySelector(".main-container");


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
  result.style.display = "block";
  displayTwoSidesContainer.style.display = "flex";
}

function showAreaHeronsContainer() {
  hideBoxesOfTrivia();
  result.style.display = "block";
  displayHeronsContainer.style.display = "flex";
}

function showSasContainer() {
  hideBoxesOfTrivia();
  result.style.display = "block";
  displaySasContainer.style.display = "flex";
}

// Function to calculate area if two sides are given
function calculateAreaTwoSides() {
  let baseValue = Number(base.value);
  let heightValue = Number(height.value);

  let area = (1 / 2) * baseValue * heightValue;
  if(baseValue > 0 && heightValue > 0) {
    result.innerText = `Area of the triangle is ${area}`;
  } else {
    result.innerText = "Please enter valid values";
  }
  
}

//Function to calculate area using Herons
function calculateAreaHerons() {
  let sideAValue = Number(sideA.value);
  let sideBValue = Number(sideB.value);
  let sideCValue = Number(sideC.value);

  //Herons consitions are fulfilled
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

    result.innerText = `Area of the triangle is ${areaHerons}`;
  } else {
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

  //sin range is taken into consideration
  if (oneAngleValue > 0 && firstSideValue > 0 && secondSideValue > 0) {
    let areaSas = (firstSideValue * secondSideValue * oneAngleValue) / 2;
    console.log(areaSas);
    result.innerText = `Area of the triangle is ${areaSas.toFixed(3)}`;
  } else {
    result.innerText = "Invalid Inputs";
  }
}


//Event Listeners
areaTwoSides.addEventListener("click", showAreaTwoSidesContainer);
areaHerons.addEventListener("click", showAreaHeronsContainer);
areaSas.addEventListener("click", showSasContainer);

calculateTwoSidesButton.addEventListener("click", calculateAreaTwoSides);
calculateHeronsButton.addEventListener("click", calculateAreaHerons);
calculateSasButton.addEventListener("click", calculateAreaSas);
