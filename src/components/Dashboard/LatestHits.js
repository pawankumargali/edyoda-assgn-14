import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const options = {
    title: {
        display: false,
    },
    legend: {
        labels: {
            fontColor: "#F5F7F8",
        }
    },
    scales: {
        xAxes: [{ 
            ticks: {
              fontColor: "#F5F7F8",
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: "#F5F7F8"
            }
        }],
    }
};

const _setChartValues = (xVals, yVals) => {
    return {
        type: 'line',
        labels:xVals,
        datasets: [
            {
                fill:false,
                label:'Latest Hits',
                data:yVals.latest,
                borderColor:'#43ACAC',
                pointRadius:0
            },
            {
                fill:false,
                label:'Popular Hits',
                data:yVals.popular,
                borderColor:'#FB6182',
                pointRadius:0
            },
            {
                fill:false,
                label:'Featured',
                data:yVals.featured,
                borderColor:'#9161F2',
                pointRadius:0
            }
        ]
    };
};

function LatestHits() {
    const [data, setData] = useState({});
    const [isChartUpdated, setIsChartUpdated] = useState(false);

    useEffect(() => {
        if(!isChartUpdated)
            updateChart();
    }, [isChartUpdated]);

    const updateChart = () => {
        if(!localStorage.getItem('projectData')) return;
        const { dasbhoardPage: dashboardPage } = JSON.parse(localStorage.getItem('projectData'));
        const { featured, latest, months, popular } = dashboardPage.latestHits;
        const updatedData = _setChartValues(months, {latest, featured, popular});
        setData(updatedData);
        setIsChartUpdated(true);
    }
    return (
        <div className="tm-bg-primary-dark tm-block">
            <h2 className="tm-block-title">Latest Hits</h2>
            <div id="lineChart">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default LatestHits;
