function berechneDoppelwert(zahl) {
    var doppelwert = zahl * 2;
    return doppelwert;
}

document.addEventListener("DOMContentLoaded", function() {
    var eingabe = prompt("Bitte geben Sie eine Zahl ein:");
    var zahl = parseFloat(eingabe);
    var ergebnis = berechneDoppelwert(zahl);
    document.getElementById("ergebnis").textContent = "Der Doppelwert beträgt: " + ergebnis;
});
