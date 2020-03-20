module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counter = 0;
        if (Array.isArray(arr)) {
            arr.forEach(element => counter = Math.max(counter, this.calculateDepth(element)));
                return ++counter;
        } else {
            return 0;
        }
    }
};