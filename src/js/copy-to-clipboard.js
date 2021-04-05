const outputRef = document.querySelector('#output');

export function copyToClipboard() {
    outputRef.select();
    outputRef.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}