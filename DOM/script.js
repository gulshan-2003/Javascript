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

   let par = document.querySelector(".desc");

// Add class
par.classList.add("highlight");

// Remove class
par.classList.remove("highlight");

// Toggle (add if missing, remove if present)
par.classList.toggle("highlight");

/*🔹 When to Use Which?

✅ classList → best for multiple style changes, maintainable code.
⚡ .style → quick one-off inline edits (not reusable).*/


/*🔹 Why Create Nodes Dynamically?

Add new elements without writing them in HTML.
Useful for lists, forms, messages, dynamic UI, etc.*/

// 1) Create an Element
let newDiv = document.createElement("div");
newDiv.textContent = "I was created with JS";
document.body.appendChild(newDiv);
// 👉 Creates a <div> and adds it at the end of body.

// 2) Create Text Node (alternative)
let newPara = document.createElement("p");
let textNode = document.createTextNode("This is a paragraph");
newPara.appendChild(textNode);
document.body.appendChild(newPara);
// 👉 Same as above, but explicitly using createTextNode.

// 3) Add Attributes
let btn = document.createElement("button");
btn.textContent = "Click Me";
btn.setAttribute("id", "myBtn");
btn.setAttribute("class", "primary-btn");
document.body.appendChild(btn);

/*
appendChild()

Accepts only Node objects (elements, text nodes, etc.)
Returns the appended node.
Not supported in old IE for multiple nodes.

append()

Accepts Node objects + strings (so you can append text directly).
Can append multiple nodes/strings at once.
Does not return the appended node (returns undefined).

👉 Example:

div.append("Hello", " World");     // works ✅
div.appendChild("Hello");          // ❌ error (string not allowed)
*/

/*🔹 1) Remove an Element
      Using .remove() (modern, simple)*/

let para3 = document.querySelector("#para") 
console.log("Before Removing : ",para3.textContent);
para3.remove()   


/*🔹 2) Replace an Element
     Using replaceChild(newNode, oldNode)*/

let list = document.querySelector("ul");
let oldItem = document.querySelector("li");
let newItem = document.querySelector("li");
newItem.textContent = "PineApple";
list.replaceChild(newItem,oldItem)
// 👉 Here, the first <li> is replaced with "New Fruit".

// 🔹 3) Clear All Child Nodes
let container1 = document.querySelector(".desc")
console.log(container1);
container1.innerHTML ="";

// =======Traversing the DOM========
/*🔹 Why Traversal?

To navigate through relatives in the DOM (parents, children, siblings).*/

// 1) Parent
let item = document.querySelector("li");
console.log(item.parentNode);       // includes text nodes
console.log(item.parentElement);    // only element nodes

// 2) Children
let list3 = document.querySelector("ul");

console.log(list3.childNodes);   // includes text, comments, line breaks
console.log(list3.children);     // only element children (HTMLCollection)
console.log(list3.firstElementChild); // first <li>
console.log(list3.lastElementChild);  // last <li>

// '3) Siblings
let item3 = document.querySelector("li");

console.log(item3.nextElementSibling);     // next <li>
console.log(item3.previousElementSibling); // previous <li>

// 4) Closest Ancestor
// let span = document.querySelector("span");
// console.log(span.closest("div"));   // finds nearest parent <div>



// =========DOM Events==========

/*🔹 What are Events?

Events are actions that happen in the browser (click, hover, typing, scrolling, etc.).
You can listen to these events and run JavaScript in response.*/

// 1) Inline Event (old way)

// {/* <button onClick="alert('Clicked!')">Click Me</button> */}


// 2) addEventListener() (modern way)

let btn1 = document.querySelector("#myBtn");

btn1.addEventListener("click", function() {
  alert("Button was clicked");
});


/*3) Common Events

Mouse → click, dblclick, mouseover, mouseout
Keyboard → keydown, keyup, keypress
Form → submit, input, change, focus, blur
Window → load, resize, scroll 
*/

// 4) Example: Change Text on Click

document.querySelector("#changeBtn").addEventListener("click", () => {
  document.querySelector("#text").textContent="Text Changed"
});

document.querySelector("#changeBtn").addEventListener("click", () => {
  document.querySelector("#text").style.backgroundColor="green"
});

document.querySelector("#inp").addEventListener('input', (event) => {
  console.log(event.target.value);
})


// ===========Event Object & Event Properties==========

/*🔹 1) What is the Event Object?

 Whenever an event occurs, JavaScript automatically passes an event object to the handler, 
 containing details about the event. */

 document.querySelector("#myBtn").addEventListener('click', function(event){
  console.log(event);
 })

// 🔹 2) Useful Event Properties

// event.type → type of event

btn1.addEventListener("click", e => {
  console.log(e.type);
})

// event.target → the element that triggered the event

document.querySelector("ul").addEventListener("click", e => {
  console.log(e.target.textContent);  // logs clicked <li> text
});

// Example: Form Submit
document.querySelector("#myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stops page reload
  console.log("Form submitted but prevented default reload!");
});


// ======Event Bubbling & Capturing======
/*  Of course. Here is a last-minute revision note on the topic.

JS Events: Bubbling vs. Capturing (Quick Revision)
1. Event Bubbling (The Default)

Direction: Up 🔼 (from Child → Parent → Grandparent)
Behavior: This is the standard way browsers handle events.
Main Use Case: Event Delegation (put one listener on a parent to handle events for many children).
Analogy: A bubble rising from the bottom of a glass to the top.

2. Event Capturing (The Specialist)

Direction: Down 🔽 (from Grandparent → Parent → Child)
Behavior: Not default. You must enable it.
How to Enable: element.addEventListener('click', fn, { capture: true });
Main Use Case: To intercept an event before it reaches its target.
Analogy: A security guard stopping someone at the main gate before they reach their office.
*/





