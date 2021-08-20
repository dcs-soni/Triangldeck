const submit = document.querySelector(".submit");
const userInput = document.getElementsByTagName("input");
const questions = document.querySelectorAll(".question");
const boxes = document.querySelectorAll(".box");
const result = document.querySelector(".result");
// console.log(boxes);

const correctAnswers = ["question1c", "question2d", "question3a", "question4b", "question5b", "question6b", "question7c", "question8c", "question9b", "question10b" ];

let score = 0;
var userAnswers = []


// console.log(questions);
function getUserAnswers() {

    // console.log(questions);
    for(const answer of userInput){
        // console.log(answer);
        if(answer.checked){
            userAnswers.push(answer.id);
        }
    }   

    checkAnswers();
    console.log("user", userAnswers);

}


function checkAnswers() {
    for(index in userAnswers){

        //Checks if the userAnswer is present in correctAnswers
        if(correctAnswers.includes(userAnswers[index])) {
            score += 1;
            boxes[index].style.backgroundColor = "green";
        }   
        else {
            boxes[index].style.backgroundColor = "red";
         }
    }

    result.innerText = `Your score is ${score}`;
}

submit.addEventListener("click", getUserAnswers);
console.log(score);