var pos = 0;
var correct = 0;
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
        b: "a datastructure that stores a fixed-size collection of elements",
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
        a: "a form of data with only two possible answers (true and false)",
        b: "a conditional statement",
        c: "a string of data",
        answer: "A"
      },
    {
        question: "What does a for statement do in javascript?",
        a: "create a singular response to user input",
        b: "proclaim a conditional as true",
        c: "create a loop that consists of three optional expressions",
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
    function get(x){
        return document.getElementById(x);
      }