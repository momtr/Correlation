// Statistics
// Mitterdorfer, 2020


/**
 * Class that models a relationship between data and is able to return a correlation coefficient
 */
class Statistics {

    /**
     * Constructor function 
     * @param {Object} data data.x is an array of all x-values and data.y is an array of all y-values 
     */
    constructor(data) {
        if(typeof data != 'object' || !data.x || !data.y)
            throw new Error('Param data must be an object containing the keys x and y');
        /**  data.x = [..], data.y = [...] */
        this.x = data.x;
        this.y = data.y;
        if(!Array.isArray(this.x) || !Array.isArray(this.y))
            throw new Error('data.x and data.y must be arrays');
    }

    /**
     * Description prints all important statistical variables of the features/attributes x and y
     */
    description() {
        let xMean = Statistics.mean(this.x);
        let yMean = Statistics.mean(this.y);
        let covariance = Statistics.covariance(this.x ,this.y, xMean, yMean);
        let xVariance = Statistics.variance(this.x, xMean);
        let yVariance = Statistics.variance(this.y, yMean);
        let pearsonCoefficient = Statistics.pearsonCoefficient(this.x, this.y);
        console.log(`%c<STATISTICS INFORMATION>\nxMean: ${xMean}\nyMean: ${yMean}\ncovariance: ${covariance}\nxVariance: ${xVariance}\nyVariance: ${yVariance}\nr: ${pearsonCoefficient}`, 'color:#05386B;background:#5CDB95;padding:3px;font-family:Arial;font-weight:bold');
    }

    /**
     * Mean returs the mean of a given array
     * @param {Array} column the array 
     */
    static mean(column) {
        if(!Array.isArray(column))
            throw new Error('Param column must be an array');
        let sum = 0;
        /** go through all elements of the param array and sum them up */
        for(let i of column) 
            sum += i;
        return sum / column.length;
    }

    /**
     * PearsonCoefficient returns the pearson coefficient between two variables. Pearson coefficient corresponds to the correlation coefficient (r). It is just the standartized (between -1 and +1) covariance of two variables.
     * @param {Array} a the first variable (array)
     * @param {Array} b the second variable (array)
     */
    static pearsonCoefficient(a, b) {
        if(!Array.isArray(a) || !Array.isArray(b))
            throw new Error('Params a and b must be arrays');
        /** calculate the mean values */
        let aMean = Statistics.mean(a);
        let bMean = Statistics.mean(b);
        /** calculate the covariance between a and b */
        let covariance = Statistics.covariance(a, b, aMean, bMean);
        /** calculate r (= correlation coefficient/pearson coefficient) */
        let varaincProduct = Statistics.variance(a, aMean) * Statistics.variance(b, bMean);
        return covariance / varaincProduct ** (1/2);
    }

    /**
     * Covariance calculates the covariance between two attributes
     * @param {Array} a the first attribute array
     * @param {Array} b the second attribute array
     * @param {Number} aMean optional, the mean of the first attribute array (= Statistics.mean(a)) 
     * @param {Number} bMean optional, the mean of the second attribute array (= Statistics.mean(b)) 
     */
    static covariance(a, b, aMean, bMean) {
        if(!a || !b || !Array.isArray(a) || !Array.isArray(b) || a.length != b.length)
            throw new Error('Params a and b must be arrays that are not empty and have the same length');
        let sum = 0;
        if(!aMean)
            aMean = Statistics.mean(a);
        if(!bMean)
            bMean = Statistics.mean(b);
        /** go through all elements of x and y */
        for(let i = 0; (i < a.length) && (i < b.length); i++) 
            /** (a_i - a_mean) * (b_i - b_mean) */
            sum += (a[i] - aMean) * (b[i] - bMean);
        return sum;
    }

    /**
     * Variance returns the variance of a given attribute
     * @param {Array} a the attriute array 
     * @param {Number} mean optional, the mean of the attribute array (= Statistics.mean(a)) 
     */
    static variance(a, mean) {
        if(!Array.isArray(a))
            throw new Error('Param a must be an array');
        if(!mean)
            mean = Statistics.mean(a);
        let sum = 0; 
        /** go through all elements of the attribute array and add the difference between the element and the mean to the sum variable */
        for(let i of a) {
            sum += (i - mean) ** 2;
        }
        return sum;
    }

}