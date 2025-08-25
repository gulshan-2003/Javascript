let a = document.body.children;
let b = document.body.children[0];
let c = document.body.children[0].textContent;

console.log(a);
console.log(b);
console.log(c);

// window.alert("Hii");
console.log(window.innerWidth);
console.log(window.document == document);

// getElementById("id") → Selects one element by its id.
let selection1 = document.getElementById("title");
console.log(selection1);
console.log(selection1.textContent);

// getElementsByClassName("class") → Selects all elements with a class.
let selection2 = document.getElementsByClassName("desc");
console.log(selection2);
console.log(selection2[0].textContent);

// getElementsByTagName("tag") → Selects elements by tag name.
let selection3 =  document.getElementsByTagName("li");
console.log(selection3);
console.log(selection3[0].textContent);

/* Important:
   getElementsByClassName and getElementsByTagName return live collections → they update if DOM changes.
   Need index to access:
   document.getElementsByTagName("li")[0]  // first li
*/

console.log("-------QUERY SELECTOR--------");

/* QuerySelector 
================
 Why use them?
Older methods (getElementById, getElementsByTagName) are limited.
querySelector and querySelectorAll use CSS selectors, which makes them very powerful & modern.
*/

// By Id
let sel1 = document.querySelector("#title");
console.log(sel1);
console.log(sel1.textContent);

// By Class
let sel2 = document.querySelector(".desc");
console.log(sel2);
console.log(sel2.textContent);

// By Tag
let sel3 = document.querySelector("li");
console.log(sel3);
console.log(sel3.textContent);

console.log("-------QUERY SELECTORALL--------");
/* QUERYSELECTORALL 
Returns all matching elements (a NodeList).
You can loop through it with for...of or forEach.
*/
let selall = document.querySelectorAll("li");  // all li elements
console.log(selall);
console.log(selall[0].textContent);

let selall2 = document.querySelectorAll(".desc"); // all with class desc
console.log(selall2);
console.log(selall2[0].textContent);

//Change color of heading
let  h = document.querySelector("#title")
h.style.color = "red";
h.style.fontSize = "30px";

// Change paragraph background
let p = document.querySelector(".desc");
p.style.backgroundColor = "yellow";
p.style.padding = "10px";

// Change only first list item
let firstLi = document.querySelector("li")
firstLi.style.fontWeight = "bold";
firstLi.style.color = "green";

// Store references in variables & log them

let fruits = document.querySelectorAll(".fruit");
console.log(fruits);  // logs NodeList of all li elements

fruits.forEach(fruit => console.log(fruit.textContent));

// Reuse variable

let para = document.querySelector(".desc")
para.textContent =  "Updated Paragrahp"; //change text
para.style.color = "blue";
para.style.fontSize = "20px";

console.log("-------Traversing the DOM (parent, children, siblings)-------");
/* Common Traversal Properties

Parent

element.parentNode
element.parentElement   // usually same as parentNode


Children

element.children              // HTMLCollection of child elements
element.firstElementChild     // first child
element.lastElementChild      // last child


Siblings

element.nextElementSibling     // next sibling
element.previousElementSibling // previous sibling
*/

let heading = document.querySelector("#title");
console.log(heading.parentNode);

let container = document.querySelector("#container")
console.log(container.children);
console.log(container.firstElementChild);
console.log(container.lastElementChild);

let para2 = document.querySelector(".desc")
console.log(para2.previousElementSibling);
console.log(para2.nextElementSibling);

let fruits2 = document.querySelectorAll(".fruit");
fruits2.forEach(fruit => {
  console.log(fruit.textContent);       // prints each fruit
  fruit.style.color = "green";          // change color
});

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].textContent);
  fruits[i].style.fontSize = "20px";    // change font size
}

//============ Reading Properties: textContent, innerText, innerHTML======

/*🔹 textContent

Returns all text inside an element (even hidden with CSS).
Faster, safer for just text.

🔹 innerText

Returns the visible text only (ignores hidden).
Triggers reflow (slower).

🔹 innerHTML

Returns the HTML inside the element, including tags.
Useful when you want both text and structure.
*/

// ======== Editing Text Safely with textContent=======
/*🔹 Why use textContent for editing?

Safest way to set plain text inside an element.
It does not parse HTML, so no risk of injecting unwanted tags or scripts.
*/

let heading1 = document.querySelector("#title1");
console.log(heading1.textContent);
heading1.textContent = "Welcome to JavaScript DOM!";
console.log(heading1.textContent);
let para1 = document.querySelector("#para");
console.log(para1.textContent);
para1.textContent = "This text has been replaced safely.";
console.log(para1.textContent);

// ========Editing with innerHTML========
/*🔹 What is innerHTML?

Allows you to set or get HTML content inside an element.
Unlike textContent, it parses HTML tags.
*/

let box = document.querySelector("#box")
box.innerHTML = "<h2 style ='color:blue'>Replaced with Heading</h2>"
box.innerHTML =box.innerHTML+` 
   <ul>
    <li>Mango</li>
    <li>Apple</li>
   </ul>
   `;

  //  ==============Styles: style.property = value and CSS classes=========
  /*🔹 Two Ways to Apply Styles via JS
1) Inline Style (directly on element)
   Use the .style property:*/

   let style1 = document.querySelector("#title");
   style1.style.color = "Red";
   style1.style.fontSize = "30px";
   style1.style.backgroundColor = "peach";

   let para = document.querySelector(".desc");

// Add class
para.classList.add("highlight");

// Remove class
para.classList.remove("highlight");

// Toggle (add if missing, remove if present)
para.classList.toggle("highlight");

/*🔹 When to Use Which?

✅ classList → best for multiple style changes, maintainable code.
⚡ .style → quick one-off inline edits (not reusable).*/




