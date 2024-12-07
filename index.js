const div = document.createElement("div");

//Styling the container div
div.style.backgroundColor = "rgb(250, 250, 250)";
div.style.borderLeft = "5px solid blue";
div.style.padding = "20px";
div.style.borderRadius = "5px";
div.style.margin = "100px auto";
div.style.width = "70%";

// Creating and styling the paragraph element
const p = document.createElement("p");
p.textContent = "See you on the other side, where we will discuss the Events in JavaScript, May the Fourth be with you.";
p.style.fontStyle = "italic";
p.style.fontFamily = "helvetica";
p.style.fontSize = "20px";

//Creating and styling the opening quote
const firstQuote = document.createElement("span");
firstQuote.textContent = "\u201C";
firstQuote.style.color = "blue";
firstQuote.style.fontSize = "30px";

//Creating and styling the closing quote
const secondQuote = document.createElement("span");
secondQuote.textContent = "\u201D";
secondQuote.style.color = "blue";
secondQuote.style.fontSize = "30px";
secondQuote.style.marginLeft = "20px";

//Adding the quotes and paragraph to the container div
div.append(firstQuote, p, secondQuote);

//Adding the container div to the body
document.body.appendChild(div);