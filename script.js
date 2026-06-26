const ascii = `
    _    _       _             
   / \\  | | ___ | |__   __ _   
  / _ \\ | |/ _ \\| '_ \\ / _\` |  
 / ___ \\| | (_) | | | | (_| |  
/_/   \\_\\_|\\___/|_| |_|\\__,_|  
`;

document.getElementById("ascii").textContent = ascii;

const text = "Building intelligent systems...";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

typeEffect();
