const submit = document.querySelector(".btn");
const userInput = document.getElementsByTagName("input");
const questions = document.querySelectorAll(".question");
const boxes = document.querySelectorAll(".box");
const result = document.querySelector(".result");
// console.log(boxes);

// console.log(questions);
function showResults() {
    const correctAnswers = ["question1c", "question2d", "question3a", "question4b", "question5b", "question6b", "question7c", "question8c", "question9b", "question10b" ];

    // console.log(questions);
    let score = 0;
    // for(let i = 0; i< userInput.length; i++){
    //     let index = correctAnswers.indexOf(userInput[i].id);
    //     console.log(index);
    //     if(userInput[i].checked){
    //         if(correctAnswers.includes(userInput[i].id)){
    //             score += 1;
    //             boxes[index].style.backgroundColor = "green";
    //         }else {
    //             console.log("error");
    //             // document.getElementById(`${userInput[i].id}`).style.backgroundColor = "red";
    //         }
    //     }   
    // }
    
    let userAnswers = []
    for(answer of userInput){
        console.log(answer);
        if(answer.checked){
            userAnswers.push(answer.id);
        }
    }

    console.log(userAnswers);


    for(index in userAnswers){
        if(correctAnswers.includes(userAnswers[index])) {
            score += 1;
            boxes[index].style.backgroundColor = "green";
        }
        else {
         boxes[index].style.backgroundColor = "red";
         }
    }

    result.innerText = `Your score is ${score}`;
    console.log(score);

}

submit.addEventListener("click", showResults);