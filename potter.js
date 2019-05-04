// Add JavaScript to your project, using either internal script tags or an external JS file.  
// Your code should include the JavaScript function flexIt(), 
// which should find the first element with the class needFlex and add the class flexIt to that element.




function flexIt(){
   

//Adjust the function in Step #2 to toggle the flexIt class on and off.  See w3schools for an example.

//document.getElementById("flex").classList.toggle("flexIt");

var el = document.querySelector('.needFlex');
  el.classList.toggle("flexIt");

    
};


// Create the emphasize(house) function so that when the user clicks the button labeled with one of the four Hogwarts houses, 
// your function applies the class emphasis to the HTML describing that house (see mockup below for an illustration).
//   Adjust the emphasize(house) function so that both the house and the individuals in that house are highlighted (see mockup below).  
//   Remember that document.getElementsByClassName puts elements with the specific class into an array.  
//   Therefore, you will have to iterate through the array to change the class of each item.


function emphasize(house) {
  var places = document.getElementsByClassName(house);

  for (var i = 0; i < places.length; i++){
      places[i].classList.toggle('emphasis');
  }

};

// Bonus: Create a new function called hideTheSnitch() that makes the words "The Snitch" appear and disappear.  
// To do this, you can adjust the element's display attribute to be either "none" or not.

function hideTheSnitch() {
    var gold = document.querySelector('#golden');
    gold.classList.toggle('snitch');
}

