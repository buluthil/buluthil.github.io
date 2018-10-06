var i = "";
function main() {
    var i = prompt("Gib deinen Namen ein");
    var node = document.getElementById("content");
    node.innerHTML += "Hello";
    node.innerHTML += i;
    node.innerHTML += ",  Liebe Grueße von Hilal!";
    console.log("Hello", i, ", willkommen bei EIA2!");
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=Aufgabe0.js.map