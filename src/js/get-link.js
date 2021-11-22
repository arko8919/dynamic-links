import { validURL } from './valid-url';
import { generateLink } from './generate-link';

const inputRef = document.querySelector('#input');
const warningRef = document.querySelector('.warning');


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

export function urlValidation(event) {
    // check if there is value inside input area and validate if this is correct URl
    if (inputRef.value !== '' && validURL(inputRef.value)) {
        updateParam();
        warningRef.textContent = '';
    } else {
        event.preventDefault()
        warningRef.textContent = 'Enter correct URL';       
    }
}

// update param object with validated URL
function updateParam() {
    // update parameters object with new link
    param['dynamicLinkInfo']['link'] = inputRef.value;

    // serialization - change object into string
    const data = JSON.stringify(param);

    // generate short URL
    generateLink(data);
}