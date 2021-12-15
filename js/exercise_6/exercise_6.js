function findLargestNums(numberSets) {
    let result = [];
    for(set of numberSets) {
        result.push(Math.max(...set));
    }

    return result;
}
