var bird = document.getElementById("bird");
var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
var score=0
var pipe1_hg;
var pipe2_hg;
var hole_hg=20;

setInterval(function () {
  pipe1_hg = Math.floor(Math.random() * 50)+10;
  pipe1.style.height = pipe1_hg + "%";
  pipe2.style.height =
    100 - (pipe1_hg + hole_hg) + "%";
}, 3000);

setInterval(() => {
    var x = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    if(x<=500){
        bird.style.top = (x+15)+"px"
    }
}, 500);

function up() {
    var fly = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    if(fly>=15){
        bird.style.top=(fly-50)+"px"
    }
}
function down() {
    var fly = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    if(fly>=15){
        bird.style.top=(fly+50)+"px"
    }
}
document.addEventListener('keyup',function(e){
    if(e.code==='ArrowUp'){
        up();
    }
    if(e.code==='ArrowDown'){
        down();
    }
})
setInterval(() => {
     document.getElementById("score").innerHTML = ++score
}, 500);

function checkCollision(myBird,thePipe) {
      var myBir = myBird.getBoundingClientRect()  
      var thePip = thePipe.getBoundingClientRect()  
      return(myBir.right>=thePip.left && 
            myBir.left<=thePip.right)&&
            (myBir.bottom>=thePip.top &&
                myBir.top<=thePip.bottom);
}

setInterval(() => {
    if(checkCollision(bird,pipe1)){
        alert("Game Over")
        window.location.reload()
    }
     if(checkCollision(bird,pipe2)){
        alert("Game Over")
        window.location.reload()
    }
}, 10);