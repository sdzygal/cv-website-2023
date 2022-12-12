// Music functionality

const spotify = document.querySelector('.spotify');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const audio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        spotify.style.color = "#08fdd8";
        audio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        spotify.style.color = "#8b64f7";
        audio.pause();
    }
}

// Sidebar Menu

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const sideNav = document.querySelector('.sidebar');

btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        sideNav.classList.add('show-nav');
        btnTimes.style.display = 'block';
        btnBars.style.display = 'none';
    }
    else if(navCondition === 'close'){
        sideNav.classList.remove('show-nav');
        btnTimes.style.display = 'none';
        btnBars.style.display = 'block';
    }
}

// TagCanvas in skills section

$(document).ready(function (){
    if(!$("#skillsCanvas").tagcanvas({
        textColour: "#8b64f7",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // hide the canvas if smth went wrong
        $("#skills-container");
    }
})

// Contacts

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')


const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()
})

const validateInput = () => {


   let email = emailInput.value
   let textarea = textareaInput.value

   if(!email && !textarea) {
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage("Form inputs are empty")
   }
}

const setError = (input) => {
    if(input.classList.contains("success")) {
        input.classList.remove("success")
    } else {
        input.classList.add("error")
    }
}

const setSuccess = (input) => {
    if(input.classList.contains("error")) {
        input.classList.remove("error")
    } else {
        input.classList.add("success")
    }

} 

const messageDiv = document.querySelector('.message')
const showMessage = (message) => {
    const divContent = document.createElement('div')
    divContent.textContent = message
    divContent.classList.add("message-content")
    messageDiv.prepend(divContent)

    setTimeout(() => {

    }, 5000)

}
