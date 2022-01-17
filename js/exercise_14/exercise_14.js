function mathExpr(expression) {
    const pattern = /([\d ]+[\s]|[\d]+)[+\-*\/][\d ]+/g;

    return pattern.test(expression);
}
