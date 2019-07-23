
//pseudo code

//need a variable to represent the user and a nother to represent the computer's resulting move

//docuement. query selectmor in prder to send the computer output to the docuement

//compare result of the computer to the result of the user

//create a list of conditionals so that if comparision is satisfied = win or loose

//user input should go in as a param


//declare variables

let weapon = Math.random()
let input = document.getElementById("input").value
let userWeapon = 0;
let computer = 0;

// determine computer weapon

if(weapon <= .2){
  computer = "paper"
}else if(weapon <= .4){
  computer = "rock"
}else if(weapon <= .6){
  computer = "scissor"
}else if(weapon <= .8){
  computer = "lizard"
}else{
  computer = "spock"
}

console.log(computer)
console.log(input)
//get user input, changes value of the user weapon

document.querySelector("button").addEventListener("click", function(){
let weapon = Math.random()
let input = document.getElementById("input").value
let userWeapon = 0;

  console.log(input)
if(computer === "rock" && input === "spock"){
  alert("win1")
}else if(computer === "rock" && input === "paper"){
  alert("win1")
}else if(computer === "paper" && input === "scissor"){
  alert("win2")
}else if(computer === "paper" && input === "lizard"){
  alert("win2")
}else if(computer === "scissor" && input === "spock"){
  alert("win3")
}else if(computer === "scissor" && input === "rock"){
  alert("win3")
}else if(computer === "lizard" && input === "rock"){
  alert("win4")
}else if(computer === "lizard" && input === "scissor"){
  alert("win4")
}else if( computer === "spock" &&  input === "lizard"){
  alert("win5")
}else if( computer === "spock" &&  input === "paper"){
  alert("win5")
}else{
  alert("loose")
}

})




/* fetch(`/api?word=${userWeapon}`)
  .then(response => response.json())
  .then((data) => {
  console.log(data);
  //not sure what this is doing...
  document.querySelector("#response").textContent = data.palindrome */
