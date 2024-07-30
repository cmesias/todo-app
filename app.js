
// Adds a class to an element
// newToDo.classList.add('myClassNameHere');

const randTodoTask = [
    "buy food...",
    "buy groceries",
    "go for a car wash",
    "walk the dog",
    "finish homework",
    "call mom",
    "send email to client",
    "clean the kitchen",
    "pay bills",
    "read a book",
    "water the plants",
    "go for a run",
    "attend meeting",
    "buy birthday gift",
    "write blog post",
    "prepare dinner",
    "take out the trash",
    "wash the dishes",
    "do the laundry",
    "organize the garage",
    "plan vacation",
    "update resume",
    "buy movie tickets",
    "book a dentist appointment",
    "study for exam",
    "renew library books",
    "make a doctor's appointment",
    "grocery shopping",
    "clean the bathroom",
    "fix the leaky faucet",
    "paint the living room",
    "take car for service",
    "prepare presentation",
    "pay rent",
    "visit grandparents",
    "write thank you notes",
    "get a haircut",
    "buy new shoes",
    "attend yoga class",
    "host a dinner party",
    "volunteer at the shelter",
    "plan the weekly menu",
    "buy a new phone",
    "attend a concert",
    "join a gym",
    "learn a new recipe",
    "start a garden",
    "update blog",
    "buy new clothes"
  ];
  

// Append new to-do li
function AddNewTask()
{
    // Select parent element of li (ul is the parent)
    const ul = document.querySelector("ul");

    // Create a new li
    const newLi = document.createElement("li");
    
    // Add a class to the new li
    newLi.classList.add('todo');

    // Make sure input value is greater than 1 length
    const newTaskCheck = document.getElementById("new-todo").value;

    // If greater than 1, add text and append new li
    if (newTaskCheck.length > 0) {

        // Add innertext to the new li
        newLi.innerText = document.getElementById("new-todo").value;
    
        // Append new li to ul
        ul.append(newLi);

        // Clear input value
        document.getElementById("new-todo").value = "";
    } 
    
    // Else, return error to console
    else {
        return console.error("add at least 1 character");
    }
}

// Pick a random to-do task as a placeholder for our user input
function pickRandToDo()
{
    // get reference to our new-todo input
    const input = document.getElementById("new-todo");

    // Random int from 0 - 49
    const randNum = Math.floor(Math.random() * 50);

    // Set placeholder value to a random to-do list action from our array
    input.setAttribute("placeholder", randTodoTask[ randNum ]);
}

// This should be called after DOM is loaded
pickRandToDo();