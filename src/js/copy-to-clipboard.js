export function copyToClipboard(outputRef) {
    const cb = navigator.clipboard;
    cb.writeText(outputRef.innerText);
}