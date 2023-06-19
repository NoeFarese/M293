const username = "test";
const password = "test123";

let enteredUsername = prompt("Bitte geben Sie Ihren Benutzernamen ein:");
let enteredPassword = prompt("Bitte geben Sie Ihr Passwort ein:");

if (enteredUsername === username && enteredPassword === password) {
    alert("Anmeldung erfolgreich!");
    let punkte = 0;

    for (let i = 1; i <= 5; i++) {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let answer = parseInt(prompt("Frage " + i + ": Was ist " + num1 + " + " + num2 + "?"));

        if (answer === num1 + num2) {
            punkte++;
            alert("Richtig!");
        } else {
            alert("Falsch!");
        }
    }

    switch (punkte) {
        case 0:
        case 1:
            alert("Sie haben " + punkte + " von 5 Punkten. Das sollte besser werden!");
            break;
        case 2:
        case 3:
            alert("Sie haben " + punkte + " von 5 Punkten. Nicht schlecht!");
            break;
        case 4:
        case 5:
            alert("Sie haben " + punkte + " von 5 Punkten. Sehr gut!");
            break;
    }

} else {
    alert("Falscher Benutzername oder falsches Passwort. Bitte versuchen Sie es erneut.");
}