(() => {
    "use strict";

    function e(e) {
        return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
    }

    const t = document.querySelector("#output");
    const n = document.querySelector("#input"),
        o = {dynamicLinkInfo: {domainUriPrefix: "https://arko.page.link", link: ""}, suffix: {option: "SHORT"}},
        s = document.querySelector("#output"), a = document.querySelectorAll('button[type="button"]');
    a[0].addEventListener("click", (function (s) {
        console.log(s), "" !== n.value ? (e(n.value), console.log(e(n.value)), o.dynamicLinkInfo.link = n.value, function (e) {
            let n = new XMLHttpRequest;
            n.open("POST", "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAjtIXOxRiIoT7O2lnBwuGFvyStdRSBGUg", !0), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function () {
                !function (e) {
                    if (e.readyState === XMLHttpRequest.DONE) if (0 === e.status || e.status >= 200 && e.status < 400) {
                        let n = JSON.parse(e.response);
                        t.value = n.shortLink, console.log(n)
                    } else {
                        let t = JSON.parse(e.response);
                        console.log(t)
                    }
                }(n)
            }, n.send(e)
        }(JSON.stringify(o))) : (s.preventDefault(), console.log("Enter Value"))
    })), a[1].addEventListener("click", (function () {
        s.select(), s.setSelectionRange(0, 99999), document.execCommand("copy")
    }))
})();