// function erklærer en funksjon
// addTodo er navnet til funksjonen
// () setter opp parameter (ikke brukt i dette tilfellet)
// {} lager en "ramme" hvor vi skal kode innenfor i denne funksjonen
function addTodo() {
    // event er en hendelse. JS markerer som utgått fordi den vil vi skal bruke e.
    //.preventDefault() er en metode som stopper nettleseren fra å gjøre det som vil automatisk skje. I dette tilfellet: stopper nettleseren fra å oppdatere etter trykk på knapp
    event.preventDefault();

    // console er en del av inspiser og gir oss mulighet til å se hva som skjer i JS
    // .log() er metoden for å logge noe til console som gir oss muligheten til å sjekke koden våres
    // "Is button clicked?" er setningen vi får opp i console om koden er riktig
    console.log("Is button clicked?")

    // const er å erklære en variable
    // taskInputData er et variabel navn
    // = å erklære en verdi som skal lagres
    // document refererer til HTML dokumentet
    // .querySelector() henter noe fra HTML
    // #taskInput er id-navnet til elementet vi henter fra HTML
    // .value er at vi henter innholdet til elementet
    // ; betyr full stopp. Denne linjen med kode er ferdig
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