//1 funzione per vedere se il campo input è vuoto => alert => "Please provide a phone number" 
//1funzione per formattare il numero 1(555)555-5555
//il numero deve essere 10 o 11 cifre. se parte con 11 cifre la prima deve essere
//  1, seguito da numeri uguali come se fosse per 10.


//funzione per cancellare il contenuto del div result.
//
const inputUser = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkInput = () => {
    const regex = /^1?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (inputUser.value === "") {
        alert("Please provide a phone number");
    } else {
        const isValid = regex.test(inputUser.value);
        const paragraph = document.createElement("p");
        paragraph.textContent = isValid ? `Valid US number: ${inputUser.value}` : `Invalid US number: ${inputUser.value}`;
        paragraph.classList = isValid ? "valid" : "invalid";
        resultDiv.appendChild(paragraph);
    }
}

const clear = () => {
    inputUser.value = "";
    resultDiv.innerHTML = "";
}

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clear);