import {validURL} from './valid-url';
import {generateLink} from './generate-link';

const inputRef = document.querySelector('#input');

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

export function getLink(event) {
    console.log(event);
    // check if there is value inside input area
    if (inputRef.value !== '') {
        // validate if this is correct URl
        validURL(inputRef.value);
        console.log(validURL(inputRef.value));

        // update parameters object with new link
        param['dynamicLinkInfo']['link'] = inputRef.value;

        // serialization - change object into string
        const data = JSON.stringify(param);

        // generate short URL
        generateLink(data);
    } else {
        event.preventDefault()
        console.log('Enter Value');
    }
}