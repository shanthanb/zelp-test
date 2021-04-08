import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CurrencyHighcharts({
    highchartsData,
    selectedCurrency,
    fetchHighchartData
}) {
    useEffect(() => {
        if (selectedCurrency) {
            const url = "https://api.coindesk.com/v1/bpi/historical/close.json";
            fetch(`${url}?currency=${selectedCurrency}&start=2013-09-01&end=2013-09-10`)
                .then(response => response.json())
                .then(data => fetchHighchartData(data))
        }
    }, [selectedCurrency, fetchHighchartData]);

    const options = {
        chart: {
            zoomType: 'x',
            width: "500"
        },
        title: {
            text: 'Last 60 Ddays trend'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 3,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: highchartsData
        }]
    }

    return (
        <div>
            {
                highchartsData
                    ? (
                        <div className='map-chart'>
                            <HighchartsReact
                                options={options}
                                highcharts={Highcharts} />
                        </div>
                    ) : (
                        <h4> Please select a currency </h4>
                    )
            }
        </div>
    )
}