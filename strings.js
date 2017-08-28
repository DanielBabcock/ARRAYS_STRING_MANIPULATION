// *********get element
let textInput = document.getElementById("textInput");
let button = document.getElementById("button");
let reversalOutput = document.getElementById("reversalDiv");
let alphabitsOutput = document.getElementById("alphabitsDiv");
let palindromeOutput = document.getElementById("palindromeDiv");


// *********add listener

// button.addEventListener("click", reversal);
textInput.addEventListener("keyup", clearNumbers);
button.addEventListener("click", doThings);

// *********declare functions
function clearNumbers(event){
    if(event.keyCode === 13){
        console.log("event", event.keyCode);
        if(isNaN(textInput.value)){
            doThings();
        } else {
            alert("no numbers, letter only. jerk");
        };  
    }
}

function doThings(event){
    let reversedString = reversal();
    alphabits();
    palindrome(event, reversedString);

 
// *********predtermined functions by assignment instruction
function reversal(event) {
    let splitInput = textInput.value.split("");
    let reverseInput = splitInput.reverse();
    let joinInput = reverseInput.join("");
    console.log("joinInput", joinInput);
        reversalOutput.innerHTML = joinInput;

        return joinInput;    
}
    
    function alphabits(event) {
        let alphSplit = textInput.value.split("");
        let alphOrder = alphSplit.sort();   
        let alphJoin = alphSplit.join("");
        console.log("alphJoin", alphJoin);
            alphabitsOutput.innerHTML = alphJoin;
        
    }
    
    function palindrome(event, reversedString) {
        console.log("reversedString", reversedString);
        console.log("textInput", textInput);
        if(textInput.value === reversedString){
            palindromeOutput.innerHTML = "Your string is a palidrome. Obi Wan Kenobi";
        }else{
            palindromeOutput.innerHTML = "Palindrome, this is not. Yoda";
        };
            
    }
}
    
    // var testString = "";
    // reversal(testString);
    // alphabits(testString);
    // palindrome(testString);





// ******CREATE CARDS


// function (object){
//     let card = `
//       <div class="reversalDiv">${object.title}
//       <article class="headerCard">${object.title}</article>
//       </div>
//       `
//     cardAction.innerHTML += card;
//   }

// <div id="reversalDiv"></div>
// <div id="alphabitsDiv"></div>
// <div id="palindromeDiv"></div>