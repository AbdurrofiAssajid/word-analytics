const textareaEl = document.querySelector('.textarea')
const characterNumberEl = document.querySelector('.stat__number--characters')
const twitterNumberEl = document.querySelector('.stat__number--twitter')
const facebookNumberEl = document.querySelector('.stat__number--facebook')
const wordsNumberEl = document.querySelector('.stat__number--words')


const inputHandler = () => {

//    using method include 
   if (textareaEl.value.includes('<script>')) {
    alert("YOU CAN'T DO THAT HERE, FUCK OFF")
    textareaEl.value = textareaEl.value.replace('<script>', '')
} 
 

// count the word of character using method split
let numberOfWords = textareaEl.value.split(' ').length;
if (textareaEl.value.length === 0) {
    numberOfWords = 0
}


// determine the number
const numberOfCharacters = textareaEl.value.length
const twitterCharactersLeft = 280 - numberOfCharacters
const facebookCharactersLeft = 2200 - numberOfCharacters


//add visual indicator if limit exceeded
twitterCharactersLeft < 0 ?  twitterNumberEl.classList.add('stat__number--limit') : twitterNumberEl.classList.remove('stat__number--limit')
facebookCharactersLeft < 0 ?  facebookNumberEl.classList.add('stat__number--limit') : facebookNumberEl.classList.remove('stat__number--limit')


// return the numbers
characterNumberEl.textContent = numberOfCharacters
twitterNumberEl.textContent = twitterCharactersLeft
facebookNumberEl.textContent = facebookCharactersLeft
wordsNumberEl.textContent = numberOfWords
}


// retutn the function
textareaEl.addEventListener('input', inputHandler)

    