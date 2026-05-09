const span = document.querySelector('.js-span');
const v8tt = document.querySelector('.js-v8tt')
let questionCard = document.querySelector('.js-questions');
const input = document.querySelector('.js-answer');
let showskill = '';
let score  = 0;
const buttonElement = document.querySelector('.js-checkAnswer');
const skillLevel = {
    level1: "Rookie",
    level2: "Amateur",
    level3: "Intermediate",
    level4:"Enthusiast"
};
const questions = [
    {
        answer: "brake"
    },
    {
        img: "images/toyota/corolla.jpg",
        question: "How many wheels are on a Toyota Corolla?",
        answer: "4"
    },
    {
        img: "images/kia/rio.jpg",
        question: "What is the term for a car that uses batteries and not a combustion engine?",
        answer: "ev"
    },
    {
        img: "images/logo/toyota.jpg",
        question: "Where is Toyota's country of origin?",
        answer: "japan"
    },
    {
        img: "images/astonmartin/vantage.webp",
        question: "How many horses are in the engine of an Aston Martin Vantage?",
        answer: "0"
    },
    {
        img: "images/logo/rarilogo.png",
        question: "What is the animal on the ferrari logo?",
        answer: "horse"
    },
    {
        img: "images/logo/fordlogo.webp",
        question: "What was Ford's first mass produced model car?",
        answer: "modelt"
    },
    {
        img: "images/logo/koenigsegglogo.JPG",
        question: "Who is the CEO of this car manufacturer?",
        answer: "christiansen"
    },
    {
        img: "images/logo/bmwlogo.webp",
        question: "Write the name of this brand in full?",
        answer: "bayeriche motoren werke"
    },
    {
        img: "images/toyota/camry.jpg",
        question: "How much horsepower does a Toyota Camry have?",
        min: 203,
        max: 301
    },
    {
        img: "images/logo/nissanlogo.webp",
        question: "Are Nismo trims faster than the standard variants?",
        answer: "yes"
    },
    {
        img: "images/bugatti/chiron.jpg",
        question: "How many gears more does a Jesko Absolute have over a Chiron Supersport?",
        answer: "2"
    },
    {
        img: "images/kia/rio.jpg",
        question: "Are there Kias in the JDM?",
        answer: "no"
    },
    {
        img: "images/logo/audilogo.jpg",
        question: "What does Audi mean by Quattro?",
        answer: "awd"
    },
    {
        img: "images/engines/coyote.avif",
        question: "Does increasing the torque make the car go faster?",
        answer: "no"
    },
    {
        img: "images/lambo/aventador.jpg",
        question: "Where is Lamborghini's country of origin?",
        answer: "italy"
    },
    {
        img: "images/engines/w16.jpg",
        question: "How many cylinders are in a W16 engine?",
        answer: "16"
    },
    {
        img: "images/kia/rio.jpg",
        question: "What does the ABS technology in modern cars help with when driving?",
        answer: "traction control"
    },
    {
        img: "images/kia/rio.jpg",
        question: "How many seats are in the McLaren F1?",
        answer: "3"
    },
    {
        img: "images/engines/flat.jpg",
        question: "The Flat-6 engine was designed perfectly to sit where in the 911?",
        answer: "rear"
    },
    {
        img: "images/kia/rio.jpg",
        question: "What is the reason for the bump dividing the cabin  along the bottom from the center console?",
        answer: "drivetrain"
    },
    {
        img: "images/mazda/na.jpg",
        question: "What is the name of the manufacturer of this car?",
        answer: "mazda"
    },
    {
        img: "images/nissan/gtr33.jpg",
        question: "What is the nickname the Japanese gave to the Nissan GT-R lineup?",
        answer: "godzilla"
    },
];
let currentQuestion = 0;
function renderQuestion(){
    const q = questions[currentQuestion];
    questionCard.innerHTML = `<div class="js-displayQuestions displayQuestions">
        <img src="${q.img} class="quiz" alt=""><br>
        <p id="onep">${q.question}</p>
        </div>`;
}
function checkAnswer(){
    const answer = input.value.toLowerCase();
    const q = questions[currentQuestion];
    if (q.answer && answer ===q.answer){
        correct();
    } else if (q.min && answer >= q.min && q.min && answer <= q.max){
        correct();
    } else if (answer===''){
        wrong();
        alert('No answer. No point!');
    } else {
        wrong();
        alert('You have the internet and this website at your disposal for answers.');
    }
}
function correct(){
    score ++;
    currentQuestion ++;
    input.value = '';
    if (currentQuestion<questions.length){
        renderQuestion();
    } else {
        results();
        scoreboard();
    }
}
function wrong(){
    score += 0;
    currentQuestion ++;
    input.value = '';
    if (currentQuestion<questions.length){
        renderQuestion();
    } else {
        results();
        scoreboard();
    }
}
function scoreboard(){
    questionCard.innerHTML = `<div class="scoreboard">
            <h2 class="heading">Scoreboard time!</h2>
            <table class="traitsTable">
                <tr>
                    <th><span class="js-answered answered"></span>Correct Answers</th>
                    <td>${score}</td>
                </tr>
                <tr>
                    <th><span class="js-answered answered"></span>Skill Level</th>
                    <td>${showskill} XP</td>
                </tr>
            </table>
        </div>`;
    results();
}
function results(){
    const percent = (score/questions.length)*100;
    const lowMark = document.querySelectorAll('.js-answered');
    if (percent <= 25){
        showskill = skillLevel.level1;
        lowMark.forEach((lowMark)=>{
            lowMark.classList.add('lowMark');
        });
    } else if (percent <= 50){
        showskill = skillLevel.level2;
        lowMark.forEach((lowMark)=>{
            lowMark.classList.add('midmark1');
        });
    } else if (percent <= 75){
        showskill = skillLevel.level3;
        lowMark.forEach((lowMark)=>{
            lowMark.classList.add('midmark2');
        });
    } else {
        v8tt.play();
        showskill = skillLevel.level4;
        lowMark.forEach((lowMark)=>{
            lowMark.classList.add('highmark');
        });
    }
}
input.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        checkAnswer();
    }
});
buttonElement.addEventListener('click',()=>{
    checkAnswer();
});