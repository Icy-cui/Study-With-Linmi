// AJAX
const doggo = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function doPromise() {
    const promise = fetch(doggo);
    promise
        .then(function(response) { // first function: successful informarion
            const processingPromise = response.json();
            return processingPromise; // return value pass to the next then funtion
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}

// console.log("this will log first");
document.querySelector(".add-doggo").addEventListener("click", doPromise);