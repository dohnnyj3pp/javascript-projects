var Sent1 = "This is the beginning of the string"; // This is the first variable created
var Sent2 = " and this is the end of the string";  // This is the second variable created
window.alert(Sent1 + Sent2);                       // This concatenates the variables in a pop-up window in the browser.

var result = 10 + 5 - 2;                           // Initial calculation
document.write(result);                             // This displays the initial result.

// Create a button element
var button = document.createElement("button");
button.innerHTML = "Add +1";                       // Set button text

// Function to add +1 to the result
function addOne() {
    result += 1;                                   // Increment the result by 1
    document.body.innerHTML = result;              // Update the displayed result
}

// Attach the click event to the button
button.onclick = addOne;

// Add the button to the body
document.body.appendChild(button);