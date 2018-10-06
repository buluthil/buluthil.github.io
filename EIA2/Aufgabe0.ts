var i : string ="";
        
    function main() {
        var i = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("content");
        node.innerHTML += "Hello";
        node.innerHTML += i;
        node.innerHTML += ",  Liebe Grueße von Hilal!";
        console.log("Hello",i,", willkommen bei EIA2!");
        }
    
    document.addEventListener('DOMContentLoaded',main);