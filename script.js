//currentPage lägger man in som en parrameter till storyPages,värdet är 0 och då kommer listobjekt 0 visas.

// array med objekt
let scenes = [
    // listobjekt 0
    {
        question: "Du vaknar i skogen utan minne, Längre bort ser du en smal stig och till höger om stigen finns en liten grottöppning.",
        answers: {
            first: { answer: "Följer du stigen?", next: 2 },
            second: { answer: "Eller går du ner i grottan?", next: 1 } 
        }
    },
    //listobjekt 1 grottan
    {
        question: "Inne i grottan börjar det bli mörkt men som tur är finns på väggen mjligheten att tända en fackla. ",
        answers: {
            first: { answer: "Tänder du facklan?", next: 3 },
            second: { answer: "Eller går du i mörkret?", next: 4 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    //listobjekt 2 stigen
    {
        question: "På stigen möter du en skepnad som ger dig två val. ",
        answers: {
            first: { answer: "Stå till tjänst i all evighet", next: 5 },
            second: { answer: "bli ett med skepnaden?", next: 6 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    //listobjekt 3 grottan första val
    {
        question: "när du tänder facklan ser du en kista liggandes på marken. ",
        answers: {
            first: { answer: "öppna kistan?", next: 11 },
            second: { answer: "strunta i kistan och fortsätt?", next: 4 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    // listobjekt 4 grottan andra val
    {
        question: "du trampa tyvärr ned i ett hål och dog. Vill du fortsätta att vara död eller kanske återfödas till något kul ",
        answers: {
            first: { answer: "jag vill vara död?", next: 1 },
            second: { answer: "jag vill återfödas?", next: 8 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    //listobjekt 5 stigen första val
    {
        question: "du står nu till tjänst i all evighet villket innebär att bära skepnadens väska i all evighet. ",
        answers: {
            first: { answer: "lev med att bära din egen väska i all evighet?", next: 9 },
            second: { answer: "kasta väskan på marken och stunta i din tjänst?", next: 10 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    //listobjekt 6 stigen andra val
    {
        question: "du är nu ett med skepnaden och vaknar upp i en grotta. I grottan är det mörkt men som tur var finns en fackla på väggen som går att tända ",
        answers: {
            first: { answer: "tänd facklan?", next: 3 },
            second: { answer: "Fortsätt utan att tända?", next: 4 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    //listobjekt 7 grottan tredje val
    {
        question: "du är nu död och spelet är slut. ",
        answers: {
            first: { answer: "", next: 3 },
            second: { answer: "", next: 4 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    //listobjekt 8 grottan tredje val
    {
        question: "du är nu återfödd till en skepnad och vaknar upp på en stig. På stigen möter du dig själv och ger dig själv två alternativ ",
        answers: {
            first: { answer: "bli ett med dig själv?", next: 6 },
            second: { answer: "eller bär din egen väska i all evighet?", next: 5 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    // listobjekt 9 
    {
        question: "Grattis du har valt att bär dina egena grejjer! ",
        answers: {
            first: { answer: "börja om?", next: 0 },
            second: { answer: "avsluta?", next: 7 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    // listobjekt 10
    {
        question: "Du kasta din egen väska och där med din själ,vilket innebär att du faller isär och dör. ",
        answers: {
            first: { answer: "acceptera din död?", next: 7 },
            second: { answer: "börja om spelet?", next: 0 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    // listobjekt 11
    {
        question: "I kistan låg tyvärr en giftorm som bet dig i handen och det blev tyvärr din död. ",
        answers: {
            first: { answer: "vill du återfödas?", next: 8 },
            second: { answer: "börja om spelet?", next: 0 } // ändra siffrer för att välja vilken scene som skall komma efter
        }
    },
    {
        question: "Du struntar i potentionell rikedom och forsätter in i grottan. Men är du säker på att du inte vill öppna kistan? ",
        answers: {
            first: { answer: "öppna kistan?", next: 11 },
            second: { answer: "fortsätt?", next: 0 } // ändra siffrer för att välja vilken scene som skall komma efter
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
  