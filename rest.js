const restBtnn = document.querySelector('#randomRest')

function darkMode() {
	var element = document.body;
	element.className = "dark-mode";
  }

function lightMode() {
	var element = document.body;
	element.className = "light-mode";
}


function restFunc(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
	const item = arr[randomIndex];
	return item;
}

const restArray = ['Burger Stop', 'McDonalds', 'Wendys', 'Burger King', 'Sills Cafe']

const result = restFunc(restArray)


restBtnn.addEventListener('click', alert(result))