window.onload = function() {
    var eingabe = prompt("Bitte geben Sie eine Zahl ein:");
    var zahl = parseFloat(eingabe);
    var doppelwert = zahl * 2;
    document.getElementById("ergebnis").innerHTML = "Der Doppelwert beträgt: " + doppelwert;
};