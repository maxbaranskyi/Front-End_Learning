function ascDesNone(numberSets, order) {
    switch(order) {
        case 'Asc':
            return numberSets.sort();
        case 'Des':
            return numberSets.sort(function(a, b) {
                return b - a;
            });
        default:
            return numberSets;
    }
}
