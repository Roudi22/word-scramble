const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time span b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer)
    timer = setInterval(()=> {
        if(maxTime > 0) {
            maxTime--;
             return timeText.innerText = maxTime;
        }
        clearInterval(timer)
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`)
        initGame()
    }, 1000)
}
const initGame = ()=> {
    
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1 ; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // shuffling and swaping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]] 
        
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length)
    // setInterval(()=> {
    //     time = time - 1;
    //     timeText.innerText = time;
    // }, 1000)
    // console.log(time)
    
}

initGame();

const checkWord = ()=> {
    let userWord = inputField.value;
    if(!userWord) return alert("Please enter a word")
    if (userWord !== correctWord) return alert("wrong word!!")
    alert("Congrats!!! You are right!")
    initGame()
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);