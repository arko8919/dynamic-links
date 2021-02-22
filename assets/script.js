const buttonRef = document.querySelectorAll('button[type="button"]');
const inputRef = document.querySelector('#input');
const outputRef = document.querySelector('#output');


const apiKey = 'AIzaSyAjtIXOxRiIoT7O2lnBwuGFvyStdRSBGUg';
const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${apiKey}`;

const param =
    {
        dynamicLinkInfo: {
            domainUriPrefix: 'https://arko.page.link',
            link: '',
        },
        suffix: {
            option: 'SHORT'
        }
    };

// url shortener
buttonRef[0].addEventListener('click', getLink);
// copy to clipboard
buttonRef[1].addEventListener('click', copyToClipboard);




// validate URL ( I need to adjust regular expresion to match exactly link )
function validURL(string) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(string);
}

function updateParamLink(link) {
    param['dynamicLinkInfo']['link'] = link;
}

function getLink(event) {
    // check if there is value inside input area
    if (inputRef.value !== '') {
        // validate if this is correct URl
        validURL(inputRef.value);
        // update parameters object with new link
        updateParamLink(inputRef.value);
        // serialization - change object into string
        const data = JSON.stringify(param);
        // generate short URL
        generateLink(data);
    } else {
        event.preventDefault()
        console.log('Enter Value');
    }
}

function displayShortLink(shortLink) {
    outputRef.value = shortLink.shortLink;
    console.log(shortLink);
}


function generateLink(data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        generateLinkResponse(xhr);
    };
    xhr.send(data);
}

function generateLinkResponse(xhr) {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)) {
            let objectResponse = JSON.parse(xhr.response);
            displayShortLink(objectResponse);
        } else {
            let objectResponse = JSON.parse(xhr.response);
            console.log(objectResponse);
        }
    }
}

function copyToClipboard() {
    outputRef.select();
    outputRef.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}