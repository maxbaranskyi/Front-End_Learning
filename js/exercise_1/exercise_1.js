function countTrue(boolArray) {
    let result = boolArray.filter(function(value) {
        return value
    });

    return result.length;
}
