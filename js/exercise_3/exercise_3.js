function sortDescending(numberToSort) {
    return parseInt((""+numberToSort).split('').sort((a, b) => b - a).join(''));
}
