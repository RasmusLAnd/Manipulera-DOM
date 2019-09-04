// tilgå body element - benyt querySelector
// opret div - create element
// opret p- create element
// opret text note med Navn - create text note

// append text note til p
// append p til div
// append child (div) til body
// kan også benytte insert adjcent html

let bodyElement = document.querySelector(".body");
var divs = document.createElement("div");
var para = document.createElement("p");
var tekst = document.createTextNode("Rasmus Lund Andersen");

para.appendChild(tekst);
divs.appendChild(para);
bodyElement.appendChild(divs);

// let htmlBlok = "<div><p> Rasmus Lund Andersen </p></div>";
// console.log(htmlBlok);
// bodyElement.insertAdjacentHTML('afterbegin', htmlBlok);


// Opret array med gode ting
// opret div 
// loop gennem array og append string @index


let bodyElement2 = document.querySelector(".body");

var divs2 = document.createElement("div");

let goodAt = ["sove,   ", "spise,   ", "drikke øl,   ", "køre bil,   "];
var arrayLength = goodAt.length;
for (var i = 0; i < arrayLength; i++) {
    // console.log(goodAt[i]);
    divs2.append(goodAt[i]);
    bodyElement2.appendChild(divs2);
};


