function tempConversion(celciusDegree) {
    let fahrenheitDegree = celciusDegree * 9 / 5 + 32;
    let kelvinDegree = celciusDegree + 273.15;

    return [fahrenheitDegree, kelvinDegree];
}
