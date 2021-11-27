import { fetchShortLink } from './fetch-short-link';

export function generateShortLink(event, inputRef, spanErrorRef) {
    if (!inputRef.validity.valid) {
        // If input field is not valid, don't send HTML request
        event.preventDefault();
    } else {
        fetchShortLink(inputRef, spanErrorRef);
    }
}


