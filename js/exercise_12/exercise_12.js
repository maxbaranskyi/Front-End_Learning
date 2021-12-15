function trace(matrix) {
    let result = 0;
    for (let row in matrix) {
        if (matrix[row].length === matrix.length) {
            result += matrix[row][row];
        } else {
            console.log('Invalid type of matrix')
            break;
        }
    }

    return result;
}
