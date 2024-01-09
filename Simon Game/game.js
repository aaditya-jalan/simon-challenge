var buttonColors=["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
var started=false;
var level=0;


function nextSequence(){
    level++;
    $("#level-title").text("level "+level);
var num=Math.random()*4;
num=Math.floor(num);
var randomChosenColor= buttonColors[num];
gamepattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
userClickedPattern=[];
};
    function checkAnswer(currentLevel){
        if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
            console.log("success");
            if(currentLevel===gamepattern.length-1){
                setTimeout(function(){
                    nextSequence();
                },1000);
               
            }
        }else{
            //console.log("wrong");
            $("#level-title").text("Game Over, Press Any Key to Restart");
            $("body").addClass("red");
            setTimeout(function(){
                $("body").removeClass("red");
            },100)
            $(".btn").on("click",playSound("wrong"));
            started=false;
            gamepattern=[];
        }
    }

function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
}

//adding sounds and animation to button
$("#green").on("click",function(){
    var greenAudio=new Audio('sounds/green.mp3');
    greenAudio.play();
    $("#green").fadeOut(50).fadeIn(50);
   // setTimeout(function(){
     //   $("#green").removeClass("pressed");
    //},100)
})
$("#blue").on("click",function(){
    var greenAudio=new Audio('sounds/blue.mp3');
    greenAudio.play();
    $("#blue").fadeOut(50).fadeIn(50);
    //setTimeout(function(){
     //   $("#blue").removeClass("pressed");
    //},100)
})
$("#red").on("click",function(){
    var greenAudio=new Audio('sounds/red.mp3');
    greenAudio.play();
    $("#red").fadeOut(50).fadeIn(50);
   // setTimeout(function(){
     //   $("#red").removeClass("pressed");
    //},100)
})
$("#yellow").on("click",function(){
    var greenAudio=new Audio('sounds/yellow.mp3');
    greenAudio.play();
    $("#yellow").fadeOut(50).fadeIn(50);
    //setTimeout(function(){
      //  $("#yellow").removeClass("pressed");
    //},100)
})
$(".btn").on("click",function(){
    var userClickedColor=this.getAttribute("id");
    userClickedPattern.push(userClickedColor);
    var currentLevel=userClickedPattern.length-1;
    //console.log(userClickedPattern);
    checkAnswer(currentLevel);

})

    $(document).on("keydown",function(){
        if(!started){
            level=0;
            
            $("#level-title").text("level "+level);
            nextSequence();
            started=true;
        }
    });

