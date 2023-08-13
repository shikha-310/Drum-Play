let allDrum=document.querySelectorAll(".drum");

for (let i=0; i<allDrum.length;i++){
    allDrum[i].addEventListener("click",function(){
        let letter= this.innerHTML;
        makeSound(letter);
    })

    allDrum[i].addEventListener("keydown",function(event){
        makeSound(event.key);
    })
}

function makeSound(key){
    let audio=new Audio(`${key}.mp3`);
    audio.play()
}