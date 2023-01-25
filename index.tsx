import inquirer from "inquirer";

type Answers = {
  name: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
};

type Questions = {
  type: string;
  name: string;
  message: string;
  choices?: string[];
}[];

const questions: Questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "question1",
    message: "What is the capital of France?",
    choices: ["Paris", "London", "Rome", "Madrid"],
  },
  {
    type: "list",
    name: "question2",
    message: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Saturn", "Uranus"],
  },
  {
    type: "list",
    name: "question3",
    message: "What is the smallest continent?",
    choices: ["Australia", "Africa", "Europe", "Antarctica"],
  },
  {
    type: "list",
    name: "question4",
    message: "What is the highest mountain in the world?",
    choices: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
  },
];

console.log("Welcome to the quiz game!");

const { name, question1, question2, question3, question4 }: Answers =
  await inquirer.prompt(questions);

let correctAnswers = 0;

if (question1 === "Paris") {
  correctAnswers++;
}
if (question2 === "Jupiter") {
  correctAnswers++;
}
if (question3 === "Australia") {
  correctAnswers++;
}
if (question4 === "Mount Everest") {
  correctAnswers++;
}
console.log(`${name}, you got ${correctAnswers} out of 4 questions correct!`);
