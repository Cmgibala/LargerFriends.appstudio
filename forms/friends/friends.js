//None of the inputs are assigned a variable with let 
let firstFriend = prompt("Enter the name of your first of three friends.");
let secondFriend = prompt("Enter the name of your second of three friends.");
let thirdFriend = prompt("Enter the name of your third of three friends.");

//This alert should be a prompt since there is no number input. Also this input should be changed to a number format
let bestFriend = Number(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"));

//the () need to be [] in order to create an array
var friendNames = [];

//the indices should start at 0 not 1 
friendNames[0] = firstFriend
friendNames[1] = secondFriend
friendNames[2] = thirdFriend

//best is not defined and should be replaced by bestFriend. Also bestFriend has already been defined and cannot be reassigned with let
bestFriend = friendNames[bestFriend - 1]

//firstChar needs to be changed to charAt(). I also add brackets just for readability

if (bestFriend.charAt(0) == "A") {
   alert("Your best friends' name starts with A.");
   
// the = needs to be changed to == for equal instead of assignment 
} else if (bestFriend.charAt(0) == "B") {
   alert("Your best friends' name starts with B.");
   
//Your name should be "Your best friend's name"
}else {
   alert("Your best friends' name starts with something other than A or B.");

}
