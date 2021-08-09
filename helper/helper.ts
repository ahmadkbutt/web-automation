/**
 * this function adds leading zero to month number
 * @param month
 */
const formatMonth = (month: number) => {
    return ('0' + month).slice(-2);
}

const getMonthName = (date) => {
    const monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return monthlist[date.getMonth()];
}
const formatDate = (unformattedDate) => {
    const dateArr = unformattedDate.split('/');
    const [date, month, year] = dateArr;
    const formattedDate = new Date();
    formattedDate.setFullYear(year, month - 1, date);
    return formattedDate;
}

/**
 * this function converts amount in dollars string to number
 * @param amountInDollars
 */
const convertDollarToInt = (amountInDollars) : number => {
    return parseInt(amountInDollars.replace(/[^0-9.]+/g,""));
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
    return firstTime < secondTime || firstTime === secondTime;
}

const getMonthDiff = (d1: Date, d2: Date): number => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

export {formatMonth, convertDollarToInt, getShortestTime, formatDate, getMonthName, getMonthDiff}