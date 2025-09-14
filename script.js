const questions = [
  {
    q: "Capital city of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Quetta"],
    ans: "Islamabad"
  },
  {
    q: "Fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Leopard"],
    ans: "Cheetah"
  },
  {
    q: "Smallest planet in our solar system?",
    options: ["Mars", "Mercury", "Venus", "Pluto"],
    ans: "Mercury"
  },
  {
    q: "Which gas do plants release during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    ans: "Oxygen"
  },
  {
    q: "Who invented the light bulb?",
    options: ["Einstein", "Edison", "Newton", "Tesla"],
    ans: "Edison"
  },
  {
    q: "World’s largest ocean?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    ans: "Pacific"
  },
  {
    q: "Currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Ringgit"],
    ans: "Yen"
  },
  {
    q: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    ans: "Mars"
  },
  {
    q: "Human body’s largest organ?",
    options: ["Liver", "Skin", "Heart", "Brain"],
    ans: "Skin"
  },
  {
    q: "First man to step on the Moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    ans: "Neil Armstrong"
  }
];

let current=0, score=0, selected=null;

const questionEl=document.getElementById('question');
const optionsEl=document.getElementById('options');
const nextBtn=document.getElementById('next-btn');
const resultBox=document.getElementById('result-box');
const scoreText=document.getElementById('score-text');
const remarkEl=document.getElementById('remark');
const restartBtn=document.getElementById('restart-btn');

function showQuestion(){
  selected=null;
  nextBtn.style.display="none";
  optionsEl.innerHTML="";
  questionEl.textContent=questions[current].q;
  questions[current].options.forEach(opt=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    btn.className="option-btn";
    btn.onclick=()=>{
      document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      selected=opt;
      nextBtn.style.display="inline-block";
    };
    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick=()=>{
  if(selected===questions[current].ans) score++;
  current++;
  if(current<questions.length){showQuestion();} 
  else {showResult();}
};

function showResult(){
  document.getElementById('quiz-box').style.display="none";
  resultBox.style.display="block";
  scoreText.textContent=`You scored ${score} out of ${questions.length}`;
  if(score>=9) remarkEl.textContent="Outstanding!";
  else if(score>=7) remarkEl.textContent="Excellent!";
  else if(score>=5) remarkEl.textContent="Good effort!";
  else remarkEl.textContent="Keep learning!";
}

restartBtn.onclick=()=>{
  current=0; score=0;
  document.getElementById('quiz-box').style.display="block";
  resultBox.style.display="none";
  showQuestion();
};

showQuestion();
