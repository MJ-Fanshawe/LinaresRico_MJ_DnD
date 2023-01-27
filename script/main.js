// (() => {
// 	// set up the puzzle pieces and boards
	
// })();


// select your elements first - WHAT IS THE USER GOING TO INTERACT WITH??

// 1 to 1 conecction 
// let navButtons = document.querySelectorAll('#buttonHolder img') 

// this is a 1 to many connection to elements in the DOM  // Buttons queryselectorALL
let navButtons = document.querySelectorAll('#buttonHolder img'),  // TARGETS these are the targets = what the user uses 
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');


// functions go in the middle
// actions that should happen ACTIONS

function changeBGImage() {
	debugger;
	// change color object.property = new value
	// theHeadline.textContent = "Drag and Drop is fun!";
	// theHeadline.classList.add('orange-headline');

	// change the bg image in the drop zone 
	puzzleBoard.style.backgroundImage = 'url("../images/backGround" + this.id + ".jpg")';
	//                                                 prefijo + 0 o 1 o 2 o 3 y el sufijo .jpg 
}


// event handling at the bottom - REACTIONA
// HOW IS THE USER GOING TO INTERACT WITH THE ELEMETS / CONTROLS YOU PROVIDE?

// one element 
// navButton.addEventListener('click', changeBGImage);

// process a collection of elements and ass an event handler to each

navButtons.forEach(button => button.addEventListener('click', changeBGImage));

