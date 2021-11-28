import { htmlRequestData } from './html-request-data';
import { showApiError } from './show-api-error';

const outputRef = document.querySelector('#output');

// Update link data and send request to server
export function fetchShortLink(inputRef, spanErrorRef) {
    // Update data with new URL input from user
    // Update fetch options
    htmlRequestData.updateData(inputRef.value);

    fetch(htmlRequestData.url, htmlRequestData.myInit)
        .then(response => {
            //  A fetch() promise does not reject on HTTP errors. 
            // Check the response object returned to see if there are any errors.
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(objectResponse => {
            // Display dynamic short link
            outputRef.value = objectResponse.shortLink;
        })
        .catch(error => {
            outputRef.value = '';
            showApiError(spanErrorRef, error);         
        });
}