function sortDescending(phrase) {
    let splitedPhrase = phrase.split('');
    splitedPhrase.sort();

    return splitedPhrase.join('');
}
