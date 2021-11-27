export const htmlRequestData = {
    apiKey: 'AIzaSyCezBfMpaJL-cj_IG0kyF8wK1LcbiCprcI',
    // Concatenation and Template literals didn't work. Why?
    //  url: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key='.concat(apiKey),
    url: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyCezBfMpaJL-cj_IG0kyF8wK1LcbiCprcI',

    param:
    {
        dynamicLinkInfo: {
            domainUriPrefix: 'https://arko.page.link',
            link: '',
        },
        suffix: {
            option: 'SHORT'
        }
    },

    myInit:
    {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: {}
    },

    updateData: function (input) {
        // Use URL from input to update param object
        this.param['dynamicLinkInfo']['link'] = input;
        // Update body which will be send with other fetch options
        this.myInit.body = JSON.stringify(this.param);
    },
}
