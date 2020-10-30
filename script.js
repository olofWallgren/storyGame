/**array med scener och alternativ */
let scenes = [
    // listobjekt 0
    {
        question: "Det är dags att dra då det härjar en zombie-pandemi",
        answers: [
            { answer: "Dra!", next: 1 },
        ]

    },

    //listobjekt 1 
    {
        question: "Innan du drar måste du ta med dig dom viktigaste prylarna. I hallen ligger det en kickbike, en matkasse och en cyckel. Vad väljer du? ",
        answers: [

            { answer: "Cyckel", next: 2 },
            { answer: "Kickbike", next: 13 }
        ]
    },

    //listobjekt 2 
    {
        question: "Du hoppar på cyckeln och börjar cyckla. Vill du cyckla mot vattnet eller mot vildmarken? ",
        answers: [
            { answer: "Mot vattnet", next: 3 },
            { answer: "Vildmarken", next: 14 }
        ]
    },

    //listobjekt 3 
    {
        question: "När du kommer fram till vattnet börjar zombies flocka sig runt dig. Du ser en båt längre bort och kan välja mellan att springa dit eller försöka skrämma ihjäl zomierna. ",
        answers: [
            { answer: "Skräm", next: 4 },
            { answer: "Spring", next: 5 }
        ]
    },

    // listobjekt 4 
    {
        question: "Zombierna blev asrädda och riktigt irriterade så du blev tyvärr uppäten. Vill du börja om? ",
        answers: [
            { answer: "Börja om", next: 0 },
            { answer: "Avsluta", next: 15 }
        ]
    },

    //listobjekt 5 
    {
        question: "Du han fram till båten med livet i behåll. Du startar båten och seglar ut till närmsta ö. På ön finns fler människor med olika intressen som klarat sig undan, vill du plundra och ta allt dom äger? eller försöka bli kompis med dom? ",
        answers: [
            { answer: "Plundra", next: 6 },
            { answer: "Kompis", next: 8 }
        ]
    },

    //listobjekt 6 
    {
        question: "Plundringen gick bra och du fick med dig en konservburk med musslor.",
        answers: [
            { answer: "Ät musslorna", next: 7 },
        ]
    },

    //listobjekt 7 
    {
        question: "Musslorna var tyvärr gammla och du avled i svåra magsmärtor.",
        answers: [
            { answer: "Börja om", next: 0 },
            { answer: "Avsluta", next: 15 }
        ]
    },

    // listobjekt 8 
    {
        question: "Människorna på ön hade tyvärr utvecklat en svår form av fotbollsintresse. Du blev så uttråkad att du tillslut bara stod inför ett enda alternativ.",
        answers: [
            { answer: "Ta ditt eget liv", next: 9 },
        ]
    },

    // listobjekt 9     

    {
        question: "Du misslyckades med att ta ditt liv och råka istället förstöra hela båten. Du blev nu tvungen o simma tillbaka till fastlandet, men hur vill du simma? ",
        answers: [
            { answer: "Grodsim", next: 10 },
            { answer: "Fjärilssim", next: 11 }
        ]
    },

    // listobjekt 10
    {
        question: "Du hade tyvärr glömmt hur man simma grodsim och drunknade. ",
        answers: [
            { answer: "Avsluta spelet", next: 15 },
            { answer: "Börja om spelet", next: 0 }
        ]
    },

    // listobjekt 11
    {
        question: "Fjärlisimmet gick väldigt bra och du kom tillslut fram till fastlandet där alla zombies förväntansfulla stod o vänta på dig. Dom ville också lära sig Fjärilsimm. ",
        answers: [
            { answer: "Lär ut Fjärilsimm", next: 12 },

        ]
    },

    // listobjekt 12
    {
        question: "Grattis! Zomierna tyckte det va sjukt svårt med fjärilsimm så alla druknade och du har råkat rädda världen.",
        answers: [
            { answer: "Börja om spelet", next: 0 },
            { answer: "Avsluta", next: 15 },

        ]
    },

    // listobjekt 13
    {
        question: "Styret va lite snett på kickbiken så du fick ta cyckeln istället.",
        answers: [
            { answer: "Cyckla", next: 2 },

        ]
    },

    // listobjekt 14
    {
        question: "Väl framme i vildmarken så märker du att det är riktigt mycket mygg. Myggen är skitjobbiga och stora som måsar så du bestämmer dig för att cyckla till vattnet istället.  ",
        answers: [
            { answer: "Mot vattnet", next: 3 },

        ]
    },

    // listobjekt 15
    {
        question: "Spelet är slut!",
        answers: [
            { answer: "Börja om", next: 0 },

        ]
    }
];
/** currentScen är den aktiva scenen */
let currentScene = scenes[0]

/** Laddar sidan och visar första scen */
window.onload = uppdateCurrentSceneUI;

/** Uppdaterar currentScene */
function handleUserChoice(nextScene) {
    console.log(nextScene)
    currentScene = scenes[nextScene] 
    uppdateCurrentSceneUI()
}
    

/** Uppdaterar gränssnittet */
function uppdateCurrentSceneUI() {
    document.getElementById("question").innerText = currentScene.question 
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.querySelectorAll('*').forEach(n => n.remove());
    currentScene.answers.forEach(a => createButton(buttonBox, a.answer, () => handleUserChoice(a.next))) // funktion i funktion för att den inte skall köras direkt vi onload.
}


/** Skapar upp en knapp */
function createButton(parent, answer, func) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = answer;
    button.onclick = func;
    parent.appendChild(button);
}