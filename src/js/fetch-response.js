const outputRef = document.querySelector('#output');

export function fetchResponse(xhr) {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)) {
            let objectResponse = JSON.parse(xhr.response);
            outputRef.value = objectResponse.shortLink;
            console.log(objectResponse);
        } else {
            let objectResponse = JSON.parse(xhr.response);
            console.log(objectResponse);
        }
    }
}