function hasHiddenFee(prices, total) {
    let rightTotal = prices.map(item=> parseInt(item.substring(1))).reduce((a,b)=> a+b);
    let totalToCompare = Number.parseFloat(total.substr(1));

    return totalToCompare !== rightTotal;
}
