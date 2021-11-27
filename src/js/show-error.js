export function showError(inputRef, spanErrorRef) {
    if (inputRef.validity.valueMissing) {
        // If the field is empty, display the following error message
        spanErrorRef.textContent = 'You need to enter an url address.';
    } else if (inputRef.validity.typeMismatch) {
        // If the field doesn't contain an email address, display the following error message
        spanErrorRef.textContent = 'Entered value needs to be an e-mail address.';
    }
}

