console.log("hello world");

const imgFunc = document.querySelector('#rubberDuck')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully!');
}

imgFunc.addEventListener('mouseover', function(){
	alert('You look great!')
})

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function darkMode() {
	var element = document.body;
	element.className = "dark-mode";
  }

function lightMode() {
	var element = document.body;
	element.className = "light-mode";
  }


