import React, { useEffect } from "react";
import { connect } from "react-redux";
import CurrencySelector from './CurrencySelector';
import CurrencyHighcharts from "./CurrencyHighcharts";
import {
  fetchBitcoinApi,
  onCurrencyChange,
  fetchHighchartData
} from './store/dispatcher';
import './App.css';

function App({
  highchartsData,
  bitcoinDetails,
  fetchBitcoinApi,
  onCurrencyChange,
  selectedCurrency,
  fetchHighchartData
}) {

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then(data => fetchBitcoinApi(data.bpi))
  }, [fetchBitcoinApi]);

  return (
    <div className="App">
      <div>
        <h4> 1 Bitcoin Equals </h4>
        <CurrencySelector
          bitcoinDetails={bitcoinDetails}
          onCurrencyChange={onCurrencyChange} />
      </div>
      <div>
        <CurrencyHighcharts
          highchartsData={highchartsData}
          selectedCurrency={selectedCurrency}
          fetchHighchartData={fetchHighchartData} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ app }) => {
  return {
    bitcoinDetails: app.bitcoinDetails,
    highchartsData: app.highchartsData,
    selectedCurrency: app.selectedCurrency
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBitcoinApi(data) {
      dispatch(fetchBitcoinApi(data))
    },
    onCurrencyChange(data) {
      dispatch(onCurrencyChange(data))
    },
    fetchHighchartData(data) {
      dispatch(fetchHighchartData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
