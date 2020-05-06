const wordElem= document.getElementById('word');
const wrongLet= document.getElementById('wrongletter');
const playAgain= document.getElementById('popbtn');
const popUp= document.getElementById('popup');
const notification= document.getElementById('notif');
const finalMsg= document.getElementById('finalMsg');

const figParts= document.querySelectorAll('.fig-part');

const words =['wizard', 'scrutiny', 'hunch', 'heartland', 'scrotching', 'doomsday'];

let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctLetters=[];
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

//update wrong letter
function updateWrong(){
    wrongLet.innerHTML= `
    ${wrongLetters.length>0 ? '<p>Wrong</p>' : '' }
    ${wrongLetters.map(letter=> `<span>${letter}</span>`)}
    `;

    figParts.forEach((part, index)=>{
    const errors= wrongLetters.length;

    if(index< errors){
        part.style.display='block';
    }else{
        part.style.display='none';
    }
    })
}

// show notification
function showNotficaton(){
    notification.classList.add('show');

    setTimeout(()=>{
     notification.classList.remove('show')
    }, 2000)
}

//keydown letter press
window.addEventListener('keydown', e=>{
    // console.log(e.keyCode);
   if(e.keyCode>=65 && e.keyCode<=90){  //keycodes range for alphabets on keyboard
     const letter = e.key;

     if(selectedWord.includes(letter)){
         if(!correctLetters.includes(letter)){
             correctLetters.push(letter);
             displayWord();
         }else{
             showNotficaton();
          }    
   }else{
       if(!wrongLetters.includes(letter)){
           wrongLetters.push(letter);
           updateWrong();
       }else{
           showNotficaton();
       }
   }
}
})

displayWord();


