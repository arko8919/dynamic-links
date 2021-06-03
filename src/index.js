import './style.scss';
import {getLink} from './js/get-link';
import {copyToClipboard} from './js/copy-to-clipboard';

const buttonRef = document.querySelectorAll('button[type="button"]');

// url shortener
buttonRef[0].addEventListener('click', getLink);
// copy to clipboard
buttonRef[1].addEventListener('click', copyToClipboard);