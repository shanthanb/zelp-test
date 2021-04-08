import Actions from './action';

let defaultState = {
    bitcoinDetails: null,
    highchartsData: null,
    selectedCurrency: null
}

function convertDate(selectedDate) {
    const d = new Date(selectedDate);
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    return Date.UTC(year, month, date)
}

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case Actions.FETCH_BITCOIN_API:
            return {
                ...state,
                bitcoinDetails: action.data
            };

        case Actions.FETCH_HIGHCHART_DATA:
            let arr = [];
            let modifiedHighchartsData = [];
            arr = [Object.keys(action.data.bpi), Object.values(action.data.bpi)];
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    modifiedHighchartsData[j] = [convertDate(arr[i][j]), arr[i + 1][j]]
                }
            }
            return {
                ...state,
                highchartsData: modifiedHighchartsData
            };

        case Actions.ON_CURRENCY_CHANGE:
            return {
                ...state,
                selectedCurrency: action.data
            }
        default:
            return { ...state }
    }
}