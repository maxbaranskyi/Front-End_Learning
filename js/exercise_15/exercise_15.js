function pentagonal(index) {
    if (index > 0) {
        return (5 * index ** 2 - 5 * index + 2 ) / 2;
    } else {
        alert("Index number should be greater or equals 1");
    }
}
