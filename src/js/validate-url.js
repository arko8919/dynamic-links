import { showError } from './show-error';

export function validateURL(inputRef, divErrorRef) {
    // If error message is visible and if url input is valid, remove error message
    if (inputRef.validity.valid) {
        divErrorRef.textContent = 'Error message'; // Reset the content of the message 
        divErrorRef.className = 'error'; // Reset the visual state of message
    } else {
        // If there is still an error, show the correct error message
        showError(inputRef, divErrorRef);
    }
}

