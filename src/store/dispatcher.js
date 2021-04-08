import Actions from './action';

export function fetchBitcoinApi(data) {
    return {
        type: Actions.FETCH_BITCOIN_API,
        data
    }
}
export function fetchHighchartData(data) {
    return {
        type: Actions.FETCH_HIGHCHART_DATA,
        data
    }
}
export function onCurrencyChange(data) {
    return {
        type: Actions.ON_CURRENCY_CHANGE,
        data
    }
}