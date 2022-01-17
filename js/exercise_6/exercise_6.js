function findLargestNums(numberSets) {
    return numberSets.map(item=> Math.max(...item))
}
