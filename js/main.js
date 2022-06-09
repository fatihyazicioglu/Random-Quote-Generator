let array = [
    "The best is yet to be." ,
    "Do good and good will come to you" ,
    "A positive mindset brings positive things.",
    "When things go wrong, don't go with them"
];
let div = document.querySelector(".container div")
let button = document.querySelector("button")

function random (){
   return array[Math.floor(Math.random()*array.length)];
}
div.innerHTML =random()
button.addEventListener("click",()=>{
    div.innerHTML =random ()
})