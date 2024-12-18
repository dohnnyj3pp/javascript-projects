let activePlayer = 'X';
let selectedSquares = [];

function playXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/X.png")';
        } else {
            select.style.backgroundImage = 'url("images/O.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        document.getElementById('audioPlace').play();
        checkWinConditions();
        activePlayer = activePlayer === 'X' ? 'O' : 'X';

        if (activePlayer === 'O') {
            disableClick();
            setTimeout(() => { computersTurn(); }, 1000);
        }
        return true;
    }
}

function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (playXOrO(pickASquare)) {
            success = true;
        }
    }
}
function checkWinConditions() {
 if (arrayIncludes('0X', '1X', '2X')) {drawWinline(50, 100, 558, 100) }
 if (arrayIncludes('3X', '4X', '5X')) {drawWinline(50, 304, 558, 304) }
 if (arrayIncludes('6X', '7X', '8X')) {drawWinline(50, 508, 558, 508) }
 if (arrayIncludes('0X', '3X', '6X')) {drawWinline(100, 50, 100, 558) }
 if (arrayIncludes('1X', '4X', '7X')) {drawWinline(304, 50, 304, 558) }
 if (arrayIncludes('2X', '5X', '8X')) {drawWinline(508, 50, 508, 558) }
 if (arrayIncludes('6X', '4X', '2X')) {drawWinline(100, 508, 510, 90) }
 if (arrayIncludes('0X', '4X', '8X')) {drawWinline(100, 100, 520, 520) }
 if (arrayIncludes('0O', '1O', '2O')) {drawWinline(50, 100, 558, 100) }
 if (arrayIncludes('3O', '4O', '5O')) {drawWinline(50, 304, 558, 304) }
 if (arrayIncludes('6O', '7O', '8O')) {drawWinline(50, 508, 558, 508) }
 if (arrayIncludes('0O', '3O', '6O')) {drawWinline(100, 50, 100, 558) }
 if (arrayIncludes('1O', '4O', '7O')) {drawWinline(304, 50, 304, 558) }
 if (arrayIncludes('2O', '5O', '8O')) {drawWinline(508, 50, 508, 558) }
 if (arrayIncludes('6O', '4O', '2O')) {drawWinline(100, 508, 510, 90) }
 if (arrayIncludes('0O', '4O', '8O')) {drawWinline(100, 100, 520, 520) }

 else if (selectedSquares.length >= 9) {
    Audio('./media/tie.mp3');
    setTimeout(function () { resetGame(); }, 500);
    }
 function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);

    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y === y2) { cancelAnimationFrame(animationLoop); }
    }
}

function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0,0,608,608);
    cancelAnimationFrame(animationLoop);
}

disableClick();
audio('./media/winGame.mp3');
animateLineDrawing();
setTimeout(function () { clear(); resetGame(); }, 1000);
