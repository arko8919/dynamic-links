export function showApiError(divErrorRef, error) {
    divErrorRef.textContent = 'Network error when attempting to fetch resource.';
    divErrorRef.className = 'error active';
    console.log(error);
}