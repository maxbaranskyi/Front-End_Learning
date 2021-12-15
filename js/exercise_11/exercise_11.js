function hasHiddenFee(prices, total) {
    let rightTotal = 0;
    let totalToCompare = Number.parseFloat(total.substr(1));

    for (let price of prices) {
        rightTotal += Number.parseFloat(price.substr(1));
    }

    return totalToCompare !== rightTotal;
}
