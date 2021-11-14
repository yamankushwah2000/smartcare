import React, { useState, useEffect, Component } from 'react';
import { Line } from "react-chartjs-2";
import axios from 'axios';

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [OxygenLevels, setoxygenlevels] = useState([]);
  const [timestamp, settimestamp] = useState([]);

  window.setInterval(function(){ window.location.reload(); }, 10000);
  

  const chart = () => {
    let oxygen = [];
    let time = [];

    axios
      .get('http://localhost:5000/buffers/') 
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data) {          
          oxygen.push(parseInt(dataObj.OxygenLevels));
          time.push(dataObj.time);
          if(dataObj.emergencyStatus==1){
            window.alert("ALERT!!ALERT!!");
          }
        }

        setChartData({
          labels: time,
          datasets: [
            {
              label: "oxygen level",
              data: oxygen,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(oxygen, time);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App" >
      <h1>Oxygen Level</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "OXYGEN LEVEL", display: true },
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

export default Dashboard;


// import React, { useState, useEffect, Component } from 'react';
// import { Line } from "react-chartjs-2";
// import axios from 'axios';

// class Dashboard extends Component {

//   intervalID;
//   state = {
//     data: [],
//   }
//   constructor(props) {
//     super(props)

//     this.state = {
    

//     }
//   }

//   componentDidMount() {
//     this.getData();
//     this.intervalID = setInterval(this.getData.bind(this), 5000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   getData = () => {
//     const [chartData, setChartData] = useState({});
//     // const [oxygenlevels, setoxygenlevels] = useState([]);
//     // const [timestamp, settimestamp] = useState([]);

//     const chart = () => {
//     let oxygen = [];
//     let time = [];

//     axios
//       .get('http://localhost:5000/buffers/') 
//       .then(res => {
//         console.log(res.data);
//         for (const dataObj of res.data) {          
//           oxygen.push(parseInt(dataObj.oxygenlevels));
//           time.push(dataObj.timestamp);
//         }

//         setChartData({
//           labels: time,
//           datasets: [
//             {
//               label: "oxygen level",
//               data: oxygen,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4
//             }
//           ]
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(oxygen, time);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   }

//   render() {
//     return (
//           <div className="App" >
//             <h1>Oxygen Level</h1>
//             <div>
//               <Line
//                 data={this.state.chartData}
//                 options={{
//                   responsive: true,
//                   title: { text: "OXYGEN LEVEL", display: true },
//                   scales: {
//                     yAxes: [
//                       {
//                         ticks: {
//                           autoSkip: true,
//                           maxTicksLimit: 10,
//                           beginAtZero: false
                      
//                         },
//                         gridLines: {
//                           display: false
//                         }
                        
//                       }
//                     ],
//                     xAxes: [
                      
//                       {
//                         ticks: {
//                           autoSkip: false,
//                           maxRotation: 90,
//                           minRotation: 90,
//                           beginAtZero: false
//                         },
      
//                         gridLines: {
//                           display: false
//                         }
//                       }
//                     ]
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         );
//       };
//   }

//   export default Dashboard