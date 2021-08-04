/**
 * this function adds leading zero to month number
 * @param month
 */
const formatMonth = (month: number) => {
    return ('0' + month).slice(-2);
}

/**
 * this function converts amount in dollars string to number
 * @param amountInDollars
 */
const convertDollarToInt = (amountInDollars) : number => {
    return parseInt(amountInDollars.replace(/[^0-9\.]+/g,""));
}

/**
 * compares two times given in xxh xxm format
 * @param timeX smaller value
 * @param timeY greater value
 */

const getShortestTime = (timeX, timeY): Boolean => {
    let firstTimeHour = timeX.split(' ')[0].replace('h', '');
    let firstTimeMinute = timeX.split(' ')[1].replace('m','');
    let secondTimeHour = timeY.split(' ')[0].replace('h', '');
    let secondTimeMinute = timeY.split(' ')[1].replace('m','');
    const firstTime = parseInt(firstTimeHour + firstTimeMinute);
    const secondTime = parseInt(secondTimeHour + secondTimeMinute);
    return firstTime < secondTime;



}

export {formatMonth, convertDollarToInt, getShortestTime}