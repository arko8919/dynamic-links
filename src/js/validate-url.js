import { showError } from './show-error';

export function validateURL(inputRef, spanErrorRef) {
    // If error message is visible and if url input is valid, remove error message
    if (inputRef.validity.valid) {
        spanErrorRef.textContent = ''; // Reset the content of the message 
        spanErrorRef.className = 'error'; // Reset the visual state of message
    } else {
        // If there is still an error, show the correct error message
        showError(inputRef, spanErrorRef);
    }
}

