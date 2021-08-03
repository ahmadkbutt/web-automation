const formatMonth = (month: number) => {
    return ('0' + month).slice(-2);
}
const convertDollarToInt = (amountInDollars) => {
    return parseInt(amountInDollars.replace(/[^0-9\.]+/g,""));
}

export {formatMonth, convertDollarToInt}