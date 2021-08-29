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
      }
    ];