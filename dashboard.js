var userdetails = localStorage.getItem('userdetails');
var object = JSON.parse(userdetails);
document.getElementById('user-name').innerHTML= 'Hello ' + object.username;


let quizContainer = document.getElementById("quiz-container");
let selectedAnswers = {};
let question; 
let index; 

let questions = [
    {
        question : '1.Name the captian who won all ICC trophies?',
        options : [
            'Virat Kohli',
            'Ricky pointing',
            'M S Dhoni'
        ],
        answer : 'M S Dhoni'   
    },
    {
        question : '2.Who is the director of film project-k?',
        options : [
            'Sandeep Reddy Vanga',
            'Nag Ashwin',
            'Prashanth Neel'
        ],
        answer : 'Nag Ashwin'
    },
    {
        question : '3.How many Indian players have crossed 500+ international matches?',
        options : [
            '4',
            '7',
            '9'
        ],
        answer : '4'
    },
    {
        question : '4.Name a player who crossed 10k ODI runs in below mentioned options?',
        options : [
            'Rohit Sharma',
            'Virat Kohli',
            'Both 1 & 2'
        ],
        answer : 'Virat Kohli'
    
    },
    {
        question : '5.Prabhas year of birth?',
        options : [
            '1981',
            '1979',
            '1980'
        ],
        answer : '1979'
    
    },
    {
        question :'6.Quintin decock highest score in ODI Cricket?',
        options : [
            '189',
            '171',
            '178'
        ],
        answer : '171'
    },{
        question : '7.Which IPL Franschise team has more Trophies?',
        options : [
            'CSK',
            'RCB',
            'SRH'
        ],
        answer : 'CSK'
    }

];


const generateOptions = () => {
    let options = ``;
    for (let i = 0; i<question.options.length;i++){
        let option = question.options[i];
        let selected = false;
        if (selectedAnswers[`${question.question}`] == option){
            selected = true;
        }
        options += `<div class="each-answer">
            <input type="radio" name="answer-btn" onclick='addAnswer()' ${selected ? "checked='true'":""} value="${option}">${option}
        </div>`
    }
    return options;
}   


const addAnswer = ()=>{
    let currentOptions = document.getElementsByName("answer-btn");
    for(let i= 0; i<currentOptions.length;i++){
        let currentOption = currentOptions[i];
        if(currentOption.checked == true){
            selectedAnswers[`${question.question}`] = currentOption.value;
        }
    }
    return selectedAnswers;
}


const submit = ()=>{
    let message = `Are you sure you want to submit?`;
    let answered = Object.keys(selectedAnswers);
    if(answered.length <= questions.length){
        message += `\nYou have answered ${ answered.length} questions out of ${questions.length} questions.`
    }
    let ask = confirm(message);
    let attempted = 0;
    let correct = 0;
    let wrong = 0;
    if(ask){
        for(let i = 0; i < questions.length; i++){
            let question = questions[i];
            if(selectedAnswers[`${question.question}`] != undefined){
                attempted++;
                if(selectedAnswers[`${question.question}`] == question.answer){
                    correct++;
                }else{
                    wrong++;
                }
            }
        }
       
        
        let score = ``;
        if(correct == questions.length){
            score = `Awesome! \nYou scored ${correct} / ${questions.length}`;
        }
        else if (correct == questions.length-1){
            score = `Excellent Work! \nYou scored ${correct} / ${questions.length}`;
        }
        else if (correct == questions.length-2){
            score = `Good Job! \nYou scored ${correct} / ${questions.length}`;  
        }
        else if (correct == questions.length-3){
            score = `Not Bad! \nYou scored ${correct} / ${questions.length}`;
        }
        else if (correct == questions.length-4){
            score = `Improve! \nYou scored ${correct} / ${questions.length}`;
        }
        else if (correct == questions.length-5){
            score = `Better luck next time! \nYou scored ${correct} / ${questions.length}`;
        }

        

        quizContainer.innerHTML = `<div class="result-wrapper">
        
        <div class="result-details">
            <div style='margin-bottom:15px;'>
                <div style='font-size:1.5rem;color:rgba(113,99,186,255);margin-bottom:px;'>Your Result :</div>
                <div >${score}</div>
            </div>
            <div style='margin-bottom:15px;'>
                <div>Attempted</div>
                <div>${attempted} / ${questions.length}</div>
            </div>
            <div style='margin-bottom:15px;'>
                <div>Correct</div>
                <div>${correct} / ${questions.length}</div>
            </div>
            <div style='margin-bottom:15px;'>
                <div>Wrong</div>
                <div>${wrong} / ${questions.length}</div>
            </div>
        </div>
        
    </div>`;
    }
    
}



const preview = () =>{
    let questionOptions = ``;
    for(let j=0; j<=questions.length ; j++){
        question = questions[j];
        let options = ``;
        for (let i = 0; i<question.options.length;i++){
            let option = question.options[i];
            let selected = false;
            if (selectedAnswers[`${question.question}`] == option){
                selected = true;
            }

            options +=`<div class="each-answer">
                <input type="radio" style='margin-right:3px;' id='k' name="answer-btn${j}" ${selected ? "checked='true'":""}  value="${option}">${option}
            </div>`
        }
        questionOptions +=`<div>
            <div>
                <p>${question.question}</p>
                <div style='display:flex;flex-direction:row;'>${options}</div>
            </div>  


        </div>`
        quizContainer.innerHTML = `<div>
                <h1>Your Saved options</h1>
            </div>
            ${questionOptions}
            <div>
                <button style="padding:4px 10px;background-color:black;color:white;border-radius:5px;" onclick='submit()'>Submit</button>
            </div>`;
    
    }
    
    
}


const showQuestion = (i) => {
    index = i;
    if(questions[index]){
        question = questions[index];
        let options = generateOptions();
        quizContainer.innerHTML = `<div >
            <div  class="question-box">
                <p style="margin-bottom:20px;" class="question">${question.question}</p>
            </div>
            <div class="options-box">
                ${options}
            </div>
            <div>
                ${index > 0? `<button style="padding:4px 10px;background-color:black;color:white;border-radius:5px;" 
                onclick="showQuestion(${index}-1)">previous</button>`:''}
                ${index < questions.length - 1 ?`<button style="padding:4px 10px;background-color:black;color:white;border-radius:5px;" 
                onclick="showQuestion(${index}+1)">Next</button>`:"<button onclick='preview()' style='padding:4px 10px;background-color:black;color:white;border-radius:5px;'>preview</button>"}
            </div>
      

        </div>`
        
    }
    else{
        alert(`Invalid Question`);
    }
}
showQuestion(0);