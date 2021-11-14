import React, { useState, useEffect, Component } from 'react';
import { Line } from "react-chartjs-2";
import axios from 'axios';

const Details2 = () => {
  const [chartData, setChartData] = useState({});
  const [HeartRate, setheartrate] = useState([]);
  const [timestamp, settimestamp] = useState([]);

  window.setInterval(function(){ window.location.reload(); }, 10000);

  const chart = () => {
    let rate = [];
    let time = [];

    axios
      .get('http://localhost:5000/buffers/') 
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data) {
          
          rate.push(parseInt(dataObj.HeartRate));
          time.push(dataObj.time);
          if(dataObj.emergencyStatus==1){
            window.alert("ALERT!!ALERT!!");
          }
        }
        setChartData({
          labels: time,
          datasets: [
            {
              label: "heartrate",
              data: rate,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(rate, time);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App" >
      <h1>Heartrate</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Heartrate", display: true },
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
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
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

export default Details2;
