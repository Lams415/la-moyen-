const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconde = date.getSeconds();
console.log(hour +" heure", minute + " minute",seconde + " seconde")

var verifier = "donne moi ta note"
var note = 21;

if(note > 10 && note != 10){
console.log("succes");
}else{
    console.log("redoubler");
}
