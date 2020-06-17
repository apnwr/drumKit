
// DETECTING BUTTON PRESS


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    


    document.querySelectorAll("button")[i].addEventListener("click", function() {

        cases(this.innerHTML);
        // What to do when click detected
        buttonAnimation(this.innerHTML);
       
    });

}

// DETECTING KEYBOARD PRESS


document.addEventListener("keypress", function(event){
        
    cases(event.key);
    buttonAnimation(event.key);

});


// SOUND FUNCTION

function cases(key) {

    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "p":
            let pika = new Audio("sounds/Pikaaaa.mp3");
            pika.play();
            break;
        case "i":
                let ipl = new Audio("sounds/ipl_latest_horn.mp3");
                ipl.play();
                break;
        case "c":
                let car = new Audio("sounds/carh.mp3");
                car.play();
                break;
            
    }

}


function buttonAnimation( currentkey ){
   var activebutton =  document.querySelector("." + currentkey);
   activebutton.classList.add("pressed");

   setTimeout(function(){
       activebutton.classList.remove("pressed");
   } ,100)
}