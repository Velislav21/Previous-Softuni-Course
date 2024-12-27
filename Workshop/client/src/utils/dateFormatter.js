export function dateFormatter(dateFromInput) {
    const date = new Date(dateFromInput);

    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
}