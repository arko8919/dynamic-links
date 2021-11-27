const outputRef = document.querySelector('#output');

export function copyToClipboard() {
    const cb = navigator.clipboard;

    cb.writeText(outputRef.innerText);
     
}