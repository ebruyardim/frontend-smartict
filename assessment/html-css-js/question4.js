// ASSESSMENT:
// There is a div in the index.html file which will be animated
// Edit question4.css and this file for this assessment(You should do the css part in css file)

// Before animating, center this div both vertically and horizontally in the middle of viewport
// After that, when we click the buttons inside of this div
// The div should animate
// For 'Rotate 360' button, it should do 360° rotation on its center in 1 second
// For 'Go Up and Down' button, it should go up touch the top of the viewport and return to middle in 1 second
// Example is presented in question4.gif
// Don't forget to add your css and javascript to index.html file

function rotate(){
    var targetElement = document.getElementById("to-be-animated");
    targetElement.classList.add("rotate");

    setTimeout(() => {
        targetElement.classList.remove("rotate");
    }, 1000)
}

function up_down(){
    console.log("up_down");
    var targetElement = document.getElementById("to-be-animated");
    targetElement.classList.add("up_down");

    setTimeout(() => {
        targetElement.classList.remove("up_down");
    }, 1000)
}