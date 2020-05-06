const wordElem= document.getElementById('word');
const wrongLetter= document.getElementById('wrong-letter');
const playAgain= document.getElementById('popbtn');
const popUp= document.getElementById('popup');
const notification= document.getElementById('notif');
const finalMsg= document.getElementById('finalMsg');

const figParts= document.querySelectorAll('.figure-part');

const words =['wizard', 'scrutiny', 'hunch', 'heartland', 'scrotching', 'doomsday'];

let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctLetters=['w', 'i' , 'z', 'a', 'r', 'd'];
const wrongLetters =[];

//show hdden word
function displayWord(){
    wordElem.innerHTML=`${selectedWord
                               .split('') // split is used to convert a string into an array where each letter is an array element
                               .map(letter=>
                                `  <span class="letter">
                                ${correctLetters.includes(letter)? letter : ''}
                                    </span>
                                
                                `).join('')  // jon will convert an array back to string
                            
                            }`;
                            const innerWord=wordElem.innerText.replace(/\n/g, '');
                            
    if (innerWord=== selectedWord){
        finalMsg.innerText='congratulations! You won!';
        popUp.style.display= 'flex';
    } 
}

displayWord();


