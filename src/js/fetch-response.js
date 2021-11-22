const outputRef = document.querySelector('#output');
const warningRef = document.querySelector('.warning');

export function fetchResponse(xhr) {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)) {
            let objectResponse = JSON.parse(xhr.response);
            outputRef.value = objectResponse.shortLink;
            warningRef.textContent = '';
        } else {
            let objectResponse = JSON.parse(xhr.response);
            warningRef.textContent = 'Enter correct URL';

           
        }
    }
}