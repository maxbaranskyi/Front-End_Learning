function sortByLength(phrases) {
    return phrases.sort(function(a, b) {
        return a.length - b.length
    });
}
