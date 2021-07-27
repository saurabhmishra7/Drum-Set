var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {  var ka = this.innerHTML;
    console.log(ka);
      makesound(ka);
      buttonanimation(ka);
     });
    }
  document.addEventListener("keypress",function(event){
    
    makesound(event.key);
    buttonanimation(event.key);
  });

  function makesound(k)
  {
    switch (k) {
      case "w":var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "j":var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "k":var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case "l":var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      default:console.log(k);
      
    }
  }
function buttonanimation(currentkey)
{
 var variable=document.querySelector("."+currentkey);
 variable.classList.add("pressed");
 setTimeout(function(){variable.classList.remove("pressed");},100);
}
  





