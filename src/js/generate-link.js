import {fetchResponse} from './fetch-response';

const apiKey = 'AIzaSyAjtIXOxRiIoT7O2lnBwuGFvyStdRSBGUg';
const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${apiKey}`;

export function generateLink(data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        fetchResponse(xhr);
    };
    xhr.send(data);
}