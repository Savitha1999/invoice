// Get the modal
const popup = document.getElementById("invoicePopup");

// Get the button that opens the modal
const button = document.getElementById("invoiceButton");

// Get the <span> element that closes the modal
const closePopup = document.getElementById("closePopup");

// When the user clicks the button, open the modal
button.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closePopup.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
