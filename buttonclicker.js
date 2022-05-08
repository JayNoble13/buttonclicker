//each function will be in the button that is triggering the event//

console.log("page loaded...");
//creates dialogue box
function message() {
    alert("Ninja was liked!");
}
//targets the text inside the element to change when clicked, if == login when clicked change to logout//
//else statement reverts it to login as static until clicked//
function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
//Added to the def button, element removed when click, function is to hide the element//
function hide(el) {
    el.remove();
}