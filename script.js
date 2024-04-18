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

    //
    console.log(taskInputData);

    //
    const newListItem = document.createElement("li");
    //
    console.log(newListItem);

    //
    newListItem.textContent = taskInputData;

    //
    const taskList = document.querySelector("#taskList");

    //
    console.log(taskList);

    //
    taskList.appendChild(newListItem);
}

//
const taskButton = document.querySelector("#taskButton");

//
console.log(taskButton);

//
taskButton.addEventListener("click", addTodo);