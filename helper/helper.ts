const formatMonth = (month: number) => {
    return ('0' + month).slice(-2);
}
const convertDollarToInt = (amountInDollars) => {
    return parseInt(amountInDollars.replace(/[^0-9\.]+/g,""));
}

const getShortestTime = (timeX, timeY) => {
    let firstTimeHour = timeX.split(' ')[0].replace('h', '');
    let firstTimeMinute = timeX.split(' ')[1].replace('m','');
    let secondTimeHour = timeY.split(' ')[0].replace('h', '');
    let secondTimeMinute = timeY.split(' ')[1].replace('m','');
    const firstTime = parseInt(firstTimeHour + firstTimeMinute);
    const secondTime = parseInt(secondTimeHour + secondTimeMinute);
    if(firstTime < secondTime) return true

    return false;

}

export {formatMonth, convertDollarToInt, getShortestTime}