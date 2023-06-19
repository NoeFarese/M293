"use strict";

let name = "Elke Hinz";
    document.getElementById("before").innerText = name;
    function onClick() {
        let newName = name.replace("Hinz", "Kunz, geb. Hinz");
        document.getElementById("after").innerText = newName;
    }