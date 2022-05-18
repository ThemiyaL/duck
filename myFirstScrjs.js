alert("Enter your credit card info");

console.log("my first log!");
console.log(document);
console.log(document.getElementById("myFirstForm"));

var form = console.log(document.getElementById("myFirstForm"));
var goBTN = console.log(document.getElementById("go"));

goBTN.addEventListener("click", doWhatIWant);

function doWhatIWant(){
    console.log("this is my this: ");
    console.log(this);
    console.log("this is my event");
    console.log(event);
    console.log("this is my form");
    console.log(form);
    console.log("these are my form elements");
    console.log(form.elements[1].value);
}
