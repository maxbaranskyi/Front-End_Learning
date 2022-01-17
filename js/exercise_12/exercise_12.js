function trace(matrix) {
    let result = 0;
    if (matrix.length === 0 || matrix[0].length !== matrix.length) {
        console.log('Invalid type of matrix')
    } else {
        for (let row in matrix) {
            result += matrix[row][row];
        }

        return result;
    }    
}
