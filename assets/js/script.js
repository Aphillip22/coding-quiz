var pos = 0;
var correct = 0;
var score= 0;
var test, test_status, question, choice, choices, chA, chB, chC;
// add quiz questions
var questions = [
    {
        question: "What does html create?",
        a: "the structure of a website",
        b: "the aesthetics of a website",
        c: "the interactive function of a website",
        answer: "A"
      },
    {
        question: "What is an array?",
        a: "a string of information",
        b: "a fixed-size collection of elements",
        c: "a group of variables",
        answer: "B"
      },
    {
        question: "How many primitive data types are there in javascript?",
        a: "4",
        b: "5",
        c: "3",
        answer: "B"
      },
    {
        question: "What does css create?",
        a: "the structure of a website",
        b: "the interactive function of a website",
        c: "the aesthetics of a website",
        answer: "C"
      },
    {
        question: "What is a boolean data type?",
        a: "data with only true/false answers",
        b: "a conditional statement",
        c: "a string of data",
        answer: "A"
      },
    {
        question: "What does a for statement do in javascript?",
        a: "create a singular response to user input",
        b: "proclaim a conditional as true",
        c: "create a loop",
        answer: "C"
      },
    {
        question: "What commands will end a loop in javascript?",
        a: "break",
        b: "return",
        c: "both a & b",
        answer: "C"
      },
    {
        question: "What command changes the css styles of an element when a user hovers over the element with their mouse?",
        a: "onhover",
        b: "onclick",
        c: "active",
        answer: "A"
      }
];
// end questions
//get questions
function get(x){
    return document.getElementById(x);
}
// render a question for display on the page
function renderQuestion(){
    var initialSubmitEl=document.getElementById(enter-initials);
    test = get("test");
    if(pos >= questions.length){
      get("test_status").innerHTML = "All Finished!";
      document.getElementById("test").innerHTML = "<p>Your final score is "+(100/questions.length) * correct+".</p>";
      test.innerHTML += "<p>Enter your initials: </p>"+"<label> <input type='text' name='name'>"+"<button type='submit' id='enter-initials'>Submit Initials</button>"
      initialSubmitEl.addEventListener("click", highScore());
      // reset var to allow users to restart the test
      pos = 0;
      correct = 0;
      score = 0;
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3>";
    // display the answer selections
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  // check user input answer
  function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // cross check input to correct answer
    if(choice == questions[pos].answer){
      // increase score for correct answers
      correct++;
      score++;
    }
    pos++;
    // return to renderQuestion
    renderQuestion();
  }
var count = 0;
var timerEl = document.getElementById("timer");
var beginEl = document.getElementById("begin");

function countdown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        
        timerEl.textContent = 'Time: ' + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }
beginEl.onclick = countdown;
  // Add event listener to call renderQuestion on click
beginEl.addEventListener("click", renderQuestion);