import './style.scss';

import { validateURL } from './js/validate-url';
import { generateShortLink } from './js/generate-short-link';
import { copyToClipboard } from './js/copy-to-clipboard';

// References to DOM elements
const buttonRef = document.querySelectorAll('button[type="button"]');
const inputRef = document.querySelector('#input');
const spanErrorRef = document.querySelector('#input + div.error');



// Validate URL before sending HTML request
// Information for users as to whether the value is valid or not, if not, display error message
inputRef.addEventListener('input', event => {
    validateURL(inputRef, spanErrorRef);
});

// Generate Dynamic Short Link
buttonRef[0].addEventListener('click', event => {
    generateShortLink(event, inputRef, spanErrorRef);
});

// Copy to clipboard
buttonRef[1].addEventListener('click', copyToClipboard);

