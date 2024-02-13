let moveBtn = document.getElementById('btn2');
let clickBtn = document.getElementById('btn1');
let imageCat = document.getElementById('image1');
let image = document.getElementById('image2');

clickBtn.onclick = function(){
    imageCat.style.display = "block";
};

moveBtn.onclick = function(){
    image.style.display = "block";
};

function repeat() {
    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 100);
    moveBtn.style.right = randomX + "%";
    moveBtn.style.top = randomY + "%";
}

// Define a counter to keep track of the number of repetitions
let repetitionCount = 0;

moveBtn.onmouseover = function() {
    if (repetitionCount < 1) { // Check if repetitions are less than 2
        repeat(); // Call the repeat function
        repetitionCount++; // Increment the counter
    }
    else {
        moveBtn.onmouseover = null; // Remove the event listener after two repetitions
    }
};
