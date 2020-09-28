import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const options = {
    title: {
        display: false,
    },
    legend: {
        labels: {
            fontColor: "#F5F7F8"
        }
    }
};

const _setChartValues = (labelsArray, valsArray) => {
 
    return {
        type: 'pie',
        labels:labelsArray,
        datasets: [
            {
                label:'# of Hits',
                data:valsArray.map(({value}) => value),
                backgroundColor:valsArray.map(({color}) => color),
                borderColor:'#FFF'
            }
        ]
    };
};

const _labelNameFormatter = (label,value) =>
    label.substring(0,1).toUpperCase()+label.substring(1)+' Storage ('+value+'0 GB)';


function StorageInfo() {
    const [data, setData] = useState({});
    const chartColors = {system:'#4ED6B8', available:'#A8D582', used:'#F7604D'};
    const [isChartUpdated, setIsChartUpdated] = useState(false);

    useEffect(() => {
        if(!isChartUpdated)
            updateChart();
    }, [isChartUpdated]);

    const updateChart = () => {
        if(!localStorage.getItem('projectData')) return;
        const projectData = JSON.parse(localStorage.getItem('projectData'));
        const { dasbhoardPage:dashboardPage } = projectData;
        const labelNames=[];
        const vals=[];
        for(const label in dashboardPage.storage) {
            const value = dashboardPage.storage[label];
            const labelName = _labelNameFormatter(label, value);
            labelNames.push(labelName);
            vals.push({value, color:chartColors[label]});
        }
        const data = _setChartValues(labelNames, vals);
        setData(data);
        setIsChartUpdated(true);
    };

    return (
        <div className="tm-bg-primary-dark tm-block tm-block-taller">
            <h2 className="tm-block-title">Storage Information</h2>
            <div id="pieChartContainer">
                <div id="pieChart" className="chartjs-render-monitor" width="200" height="200">
                    <Pie data={data} options={options} />
                </div>
            </div>                        
        </div>
    );
}

export default StorageInfo;
