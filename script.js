const wordElem= document.getElementById('word');
const wrongLetter= document.getElementById('wrong-letter');
const playAgain= document.getElementById('popbtn');
const popUp= document.getElementById('popup');
const notification= document.getElementById('notif');
const finalMsg= document.getElementById('finalMsg');

const figParts= document.querySelectorAll('.figure-part');

const words =['wizard', 'scrutiny', 'hunch', 'heartland', 'scrotching', 'doomsday'];

let selectedWord = words[Math.floor(Math.random()*words.length)];
console.log(selectedWord);

