//currentPage lägger man in som en parrameter till storyPages,värdet är 0 och då kommer listobjekt 0 visas.

// array med objekt
let scenes = [
    // listobjekt 0
    {
        question: "Du vaknar i skogen utan minne, Längre bort ser du en smal stig och till höger om stigen finns en liten grottöppning.",
        answers: {
            first: { answer: "Följer du stigen?", next: 1 },
            second: { answer: "Eller går du ner i grottan?", next: 2 } 
        }
    },
    //listobjekt 1
    {
        question: "Inne i grottan börjar det bli mörkt men som tur är finns på väggen mjligheten att tända en fackla. ",
        answers: {
            first: { answer: "Tänder du facklan?", next: 1 },
            second: { answer: "Eller går du i mrkret?", next: 0 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    }
];
let currentScene = scenes[0] // för att när vi startar appen så visas scene 1
// testkörning
window.onload = uppdateCurrentScene; // när sidan laddas så visas current scene

// function presentScene() {
//     const answer = promt(scenes[currentScene].description);
//     handleUserChoice(answer)
// }

function handleUserChoice(answer) {
    console.log(answer)
    let nextScene = answer == 0 ? currentScene.answers.first.next:currentScene.answers.second.next // vänster om : är true höger om : är false


     
    console.log(nextScene)
    currentScene = scenes[nextScene] //
    uppdateCurrentScene()
   
}
// if (answer === scenes[currentScene].choice[0]) {
//     currentSchene = schenes[currentScene].nextScene[1]
//     presentScene()
// }
function uppdateCurrentScene(){
   document.getElementById("knapp1").innerText = currentScene.answers.first.answer
   document.getElementById("knapp2").innerText = currentScene.answers.second.answer
   document.getElementById("description").innerText = currentScene.question
}
  