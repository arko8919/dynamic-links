export function showApiError(spanErrorRef, error) {
    spanErrorRef.textContent = 'Network error when attempting to fetch resource.';
    spanErrorRef.className = 'error active';
    console.log(error);
}