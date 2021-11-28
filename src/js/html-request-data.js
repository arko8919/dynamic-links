export const htmlRequestData = {
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

    updateData: function (input, apiKey) {
        // Use URL from input to update param object
        this.param['dynamicLinkInfo']['link'] = input;
        // Update body which will be send with other fetch options
        this.myInit.body = JSON.stringify(this.param);
    },
}
