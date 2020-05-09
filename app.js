const panels = document.querySelectorAll('div');

const jojoSoundBites = ['zaWarudo', 'yesIAm', 'ohNo', 'goodbyeJojo'];

for(let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('mouseover', open);
}

function open(event) {
    event.target.classList.toggle('active');
    event.target.nextElementSibling.classList.toggle('hidden');
    const index = Number(event.target.id);
    let audio = new Audio(jojoSoundBites[index] + '.mp3');
    // Don't play sound again if class active is applied to div and reset back to start
    if(event.target.classList.toggle('active') && audio.currentTime > 0) {
        audio.pause();
        audio.currentTime = 0;
    }
    // only play audio if active class is applied to div and index is less than three
    if(event.target.classList.toggle('active') && index < 4 ) {
        audio.play();
    }
}