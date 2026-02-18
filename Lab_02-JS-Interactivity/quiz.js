function checkQuiz(){
    let score = 0;

    let ans1 = document.getElementById("answer1").value;
    let ans2 = document.getElementById("answer2").value.toLowerCase();
    let ans3 = document.getElementById("answer3").value.toLowerCase();

    if(ans1 === "10"){
        score++;
    }
    if(ans2 === "islamabad"){
        score++;
    }
    if(ans3 === "yes"){
        score++;
    }

    let result = document.getElementById("result");

    if(score === 3){
        result.innerText = "Excellent! Full Marks 🎉";
    }
    else if(score === 2){
        result.innerText = "Good Job! Score: " + score;
    }
    else{
        result.innerText = "Try Again! Score: " + score;
    }
}

function resetQuiz(){
    document.getElementById("answer1").value = "";
    document.getElementById("answer2").value = "";
    document.getElementById("answer3").value = "";
    document.getElementById("result").innerText = "";
}
