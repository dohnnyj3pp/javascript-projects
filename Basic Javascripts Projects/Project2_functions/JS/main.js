function displayConcatenatedString() {
    var Sent1 = "This is the beginning of the string"; // First variable
    var Sent2 = " and this is the end of the string";  // Second variable

    // Concatenate the two strings
    var result = Sent1 + Sent2;

    // Use document.getElementById to display the result in an element with the ID "output"
    document.getElementById("output").innerText = result;
}