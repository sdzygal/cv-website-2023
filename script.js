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
