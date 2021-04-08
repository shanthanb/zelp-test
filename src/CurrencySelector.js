import React, { useState } from "react";

export default function CurrencySelector({
    bitcoinDetails,
    onCurrencyChange
}) {
    const [bitcoinValue, setBitcoinValue] = useState(null);
    const dropdownOptions = [
        {
            id: 1,
            value: "USD",
            displayName: "United States Dollar"
        },
        {
            id: 2,
            value: "GBP",
            displayName: "British Pound Sterling"
        },
        {
            id: 3,
            value: "EUR",
            displayName: "Euro"
        }
    ];
    function onSelectDropdown(e) {
        const details = bitcoinDetails[e.target.value]
        setBitcoinValue(details);
        onCurrencyChange(e.target.value);
    }

    return (
        <React.Fragment>
            <select defaultValue="Default"
                onChange={(e) => onSelectDropdown(e)}>
                <option value="Default" disabled> Select an option </option>
                {
                    dropdownOptions.map(({ value, displayName }, index) => {
                        return (
                            <option key={index} value={value}>
                                {displayName}
                            </option>
                        )
                    })
                }
            </select>
            {
                bitcoinValue && (
                    <h1 id="bitcoin-value">
                        {bitcoinValue.rate_float.toFixed(2)} {bitcoinValue.description}
                    </h1>
                )
            }
        </React.Fragment>
    )
}