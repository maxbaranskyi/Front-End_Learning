function missingLetter(letters) {
    const rightChar = letters.charCodeAt(0)

    for (let i = 1; i < letters.length; i++) {
        nextChar = letters.charCodeAt(i);
        if (nextChar !== rightChar + i) {
            return String.fromCharCode(rightChar + i);
        }
    }

    return 'No Missing Letter';
}
