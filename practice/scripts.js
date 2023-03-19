 
// Dom traversal methods 
// 1> parentElement
// 2> parentNode
// 3> Children
// 4> chiidNode
// 5> firstchild
// 6> lastchild
// 7> firstElementchild
// 8> lastElementchild
// 9> nextElementSibling
// 10> previousElementSibling
// 11> previousSibling
// 12> nextSibling
// when its end its returne   (null)  or  (undefine)

// 1> parentElement

//  let a =document.getElementById("inner").parentElement.style.border=" 10px solid black";
//  document.getElementById("next-inner").parentElement.style.border=" 2px solid black";
//  console.log(a);

// 2> parentNode

// when its end its returne  any things abouts (parent)
//  let a =document.getElementById("inner").parentNode.style.backgroundColor=" black";
//  document.getElementById("next-inner").parentNode.style.backgroundColor=" tan";
//  console.log(a);

// 3> Children

// when its  counts (tags name) abouts (child)
// let a =document.getElementById("inner").children[1].style.backgroundColor="black";
//  document.getElementById("inner").children.style.border=" 12px solid black";
//console.log(a);

// 4> childNode

// when its  counts (tags name , space , comment any things) abouts (child)
//  let a =document.getElementById("outer").childNodes[3].style.backgroundColor="blue";
//  document.getElementById("inner").childNodes[1].style.border=" 12px solid black";
// console.log(a);

// 5> firstElementChild

//   let a =document.getElementById("outer").firstElementChild.style.backgroundColor="blue";
// console.log(a);

// 6> LastElementChild

//   let a =document.getElementById("inner").lastElementChild.style.backgroundColor="blue";
// console.log(a);

// 7> firstchild

//   let a =document.getElementById("outer").firstChild;
// console.log(a);

// 8> lastchild

//   let a =document.getElementById("outer").lastChild;
// console.log(a);


// 9> nextElementSibling

// let a =document.getElementById("inner").nextElementSibling;
//  console.log(a);

// 10> previousElementSibling
 
// let a =document.getElementById("inner").previousElementSibling;
// console.log(a);

// 11> previousSibling

// let a =document.getElementById("inner").previousSibling;
// console.log(a);

// 12> nextSibling

// let a =document.getElementById("inner").nextSibling;
// console.log(a);




// creat Element in javascripts
// creat TextNode in javascripts
// creat Comment in javascripts


// creat Element in javascripts
// using this create any (element) in HTML

// let Element = document.createElement("h1");
// console.log(Element);

// creat TextNode in javascripts
// using this create any (text) in HTML

// let text = document.createTextNode("tell me abouts javascripts");
// console.log (text);

// creat Comment in javascripts
// using this create  (comment) in HTML

// let comment = document.createComment("tell me abouts javascripts");
// console.log (comment);


// Dom appendchild and insertbefore methods

// 1>  Appendchild method
//  its only show answer at last

// let element = document.createElement("h3");
// let text = document.createTextNode("tell me abouts javascripts");
//   element.appendChild(text);
//   document.getElementById("test").appendChild(element);
// console.log(element);

// 2> insertbefore method

let element = document.createElement("h3");
let text = document.createTextNode("tell me abouts javascripts");
  element.appendChild(text);
  let merg = document.getElementById("test")
 merg.insertBefore(element,merg.childNodes[0]);
console.log(merg);