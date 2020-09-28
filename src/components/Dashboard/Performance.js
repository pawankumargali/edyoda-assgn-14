import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const options = {
    title: {
        display: false,
    },
    legend: {
        labels: {
            fontColor: "#F5F7F8",
            backgroundColor:"#F7604D"
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
        type: 'horizontalBar',
        labels:xVals,
        datasets: [
            {
                barPercentage:0.2,
                label:'# of Hits',
                data:yVals.map(({value}) => value),
                backgroundColor:yVals.map(({color}) => color),
                borderColor:yVals.map(({color}) => color)
            }
        ]
    };
};

function Performance() {
    const [data, setData] = useState({});
    const [isChartUpdated, setIsChartUpdated] = useState(false);
    const chartColors={ red:'#E95F50', aqua:'#4ED6B8', green:'#A8D582', yellow:'#D7D768', purple:'#9D66CC', orange:'#DB9C3F', blue:'#3889FC' };
    
    useEffect(() => {
        if(!isChartUpdated)
            updateChart();
    }, [isChartUpdated]);

    const updateChart = () => {
        if(!localStorage.getItem('projectData')) return;
        const { dasbhoardPage: dashboardPage } = JSON.parse(localStorage.getItem('projectData'));
        const { performance } = dashboardPage;
        const xVals=[];
        const yVals=[];
        for(const color in  performance) {
            xVals.push(color);
            yVals.push({value:performance[color], color: chartColors[color.toLowerCase()]});
        }
        const updatedData = _setChartValues(xVals, yVals);
        setData(updatedData);
        setIsChartUpdated(true);
        // console.log(yVals);
    }
    return (
        <div className="tm-bg-primary-dark tm-block">
            <h2 className="tm-block-title">Performance</h2>
            <div id="barChart">
                <HorizontalBar data={data} options={options} />
            </div>
        </div>
    );
}

export default Performance;
