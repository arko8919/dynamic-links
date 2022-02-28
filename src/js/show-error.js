import { checkPattern } from './check-pattern';

export function showError(inputRef, divErrorRef) {
    if (inputRef.validity.valueMissing) {
        // If the field is empty, display the following error message
        divErrorRef.textContent = 'You need to enter an URL address.';
    } else if (!checkPattern()) {
        divErrorRef.textContent = 'Entered value needs to be an URL address.';
    } else if (inputRef.validity.typeMismatch) {
        // If the field doesn't contain an email address, display the following error message
        divErrorRef.textContent = 'Entered value needs to be an URL address.';
    }

    divErrorRef.className = 'error active';
}

