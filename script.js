// This function declares a function
// addTodo is the name of the function
// () sets up parameters (not used in this case)
// {} creates a "frame" where we will code within this function
function addTodo() {
    // event is an event. JS marks it as deprecated because it wants us to use e.
    //.preventDefault() is a method that prevents the browser from doing what would happen automatically. In this case: stops the browser from refreshing after clicking a button
    event.preventDefault();

    // console is part of the inspector and allows us to see what is happening in JS
    // .log() is the method to log something to the console which allows us to check our code
    // "Is button clicked?" is the sentence we see in the console if the code is correct
    console.log("Is button clicked?")

    // const is declaring a variable
    // taskInputData is a variable name
    // = is declaring a value to be stored
    // document refers to the HTML document
    // .querySelector() retrieves something from HTML
    // #taskInput is the id name of the element we are retrieving from HTML
    // .value is that we retrieve the content of the element
    // ; means full stop. This line of code is finished
    const taskInputData = document.querySelector("#taskInput").value;

    // Checking that the variable taskInputData returnes the desired value
    console.log(taskInputData);

    // Creating a new element
    const newListItem = document.createElement("li");

    // Checking if we created the correct element
    console.log(newListItem);

    // Add a class to the newly created element
    newListItem.classList.add("taskListItem");

    // Add content to the newly created element from the input value
    newListItem.textContent = taskInputData;

    // Getting the ul element from the HTML document
    const taskList = document.querySelector("#taskList");

    // Chekcing if we got the correct element
    console.log(taskList);

    // Adding the new element we created back to the desired element from the HTML document
    taskList.appendChild(newListItem);

    // Removing the content from input now that we have value returned to the list
    document.querySelector("#taskInput").value = ""
}

// Getting the button element from the HTML document
const taskButton = document.querySelector("#taskButton");

// Checking if we got the correct element
console.log(taskButton);

// Adding an event to the button, that runs the function above
taskButton.addEventListener("click", addTodo);