import './style.scss';

import { validateURL } from './js/validate-url';
import { generateShortLink } from './js/generate-short-link';
import { copyToClipboard } from './js/copy-to-clipboard';

// References to DOM elements
const buttonRef = document.querySelectorAll('button[type="button"]');
const inputRef = document.querySelector('#input');
const divErrorRef = document.querySelector('#input + div.error');
const outputRef = document.querySelector('#output');



// Validate URL before sending HTML request
// Information for users as to whether the value is valid or not, if not, display error message
inputRef.addEventListener('input', event => {
    validateURL(inputRef, divErrorRef);
});

// Generate Dynamic Short Link
buttonRef[0].addEventListener('click', event => {
    generateShortLink(event, inputRef, divErrorRef, outputRef);
});

// Copy to clipboard
buttonRef[1].addEventListener('click', event => {
    copyToClipboard(outputRef);
});

