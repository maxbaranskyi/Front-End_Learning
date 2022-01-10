function tempConversion(celciusDegree) {
    const fahrenheitDegree = celciusDegree * 9 / 5 + 32;
    const kelvinDegree = celciusDegree + 273.15;

    return [fahrenheitDegree, kelvinDegree];
}
