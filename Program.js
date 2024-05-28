#! /usr/bin/env node
import inquirer from "inquirer";
import Person from "./Person.js";
import Student from "./Student.js";
console.log("Type 1 if you like to talk to others type 2 if you rather keep it to yourself");
let input = await inquirer.prompt({
    name: "answer",
    type: "number",
    message: "Answer 1 or 2: ",
});
let MyPerson = new Person();
MyPerson.askQuestion(input.answer);
console.log("You are: ", MyPerson.getPersonality());
let newInput = await inquirer.prompt({
    name: "answer",
    type: "input",
    message: "Enter your name: ",
});
let MyStudent = new Student();
MyStudent.set(newInput.answer);
console.log("Your name is: ", MyStudent.get(), " and your personality is: ", MyStudent.getPersonality());
