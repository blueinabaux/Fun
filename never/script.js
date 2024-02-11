let moveBtn = document.getElementById('btn2');
let clickBtn = document.getElementById('btn1');
let imageCat = document.getElementById('image');

clickBtn.onclick = function(){
    imageCat.style.display = "block";
}


moveBtn.onmouseover = function() {
    const randomX = Math.floor(Math.random()*100);
    const randomY = Math.floor(Math.random()*100);
    moveBtn.style.right = randomX + "%";
    moveBtn.style.top = randomY+ "%";
}