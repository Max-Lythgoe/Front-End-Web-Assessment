const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const colorFunc = (e) => {
    e.preventDefault()
  alert(`Gray... if that counts as a color? Maybe it's more of a shade`)
}

const placeFunc = (e) => {
    e.preventDefault()
    alert(`I don't have one particular place but I very much enjoy movie theaters. It's always fun to watch a new, exciting movie for the first time so I have great memories in movie theaters.`)
}

const ritualFunc = (e) => {
    e.preventDefault()
    alert(`I really like listening to music right before going to sleep. Whether it's finding new music or listening to music I have already added, it's always relaxing and a fun way to better experience the music and to end the night off right.`)
}

class ButtonStyle {
    constuctor(backgroundcolor, size){
        this.backgroundcolor = backgroundcolor;
        this.size = size;
    }
}

colorBtn.addEventListener('click', colorFunc)
placeBtn.addEventListener('click', placeFunc)
ritualBtn.addEventListener('click', ritualFunc)

function darkMode() {
	var element = document.body;
	element.className = "dark-mode";
  }

function lightMode() {
	var element = document.body;
	element.className = "light-mode";
  }