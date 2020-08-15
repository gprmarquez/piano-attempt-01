const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS =['s', 'd', 'f', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
// code above gets everything with the class = "key"
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key //this corresponds with the actual key that we pressed
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    //-1 is returned if it can't find anything
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    //above are two lines that will iterate through the white and black keys array which correspnds with the key that is actually pressed
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0 //this restarts the audio on click, so that clicking on a key fast will sound the note
    noteAudio.play();
    key.classList.add('active'); //adding a class to the key. This aims to allow a different reaction on click
    noteAudio.addEventListener('ended', () => { //this event listener will wait until the event of the note playing has ended, then it will fire off the next function, which is to remove the class "active" from the class list.
        key.classList.remove('active');
    });
}