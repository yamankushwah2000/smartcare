import React, { useState, useEffect, Component } from 'react';
import { Line } from "react-chartjs-2";
import axios from 'axios';

const Details1 = () => {
  const [chartData, setChartData] = useState({});
  const [Temperature, settemperature] = useState([]);
  const [timestamp, settimestamp] = useState([]);

  window.setInterval(function(){ window.location.reload(); }, 10000);
  
  const chart = () => {
    let temp = [];
    let time = [];

    axios
      .get('http://localhost:5000/buffers/') 
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data) {
          
          temp.push(parseInt(dataObj.Temperature));
          time.push(dataObj.time);
          if(dataObj.emergencyStatus==1){
            window.alert("ALERT!!ALERT!!");
          }
        }
        setChartData({
          labels: time,
          datasets: [
            {
              label: "temperature",
              data: temp,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(temp, time);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App" >
      <h1>Temperature</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Temperature", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: false
                
                  },
                  gridLines: {
                    display: false
                  }
                  
                }
              ],
              xAxes: [
                
                {
                  ticks: {
                    autoSkip: true,
                    maxRotation: 90,
                    minRotation: 90,
                    maxTicksLimit: 10,
                    beginAtZero: false
                  },

                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Details1;
