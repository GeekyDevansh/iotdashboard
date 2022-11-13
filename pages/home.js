import React, { useState } from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import axios from 'axios';

export default function home() {
  const tank1Data = [1, 2, 3, 4, 5, 6];
  const [color, setColor] = useState("");

  const [bhData, setbhData] = useState({
    labels: ["BH-1", "BH-2", "BH-3", "BH-4", "BH-5", "BH-6"],
    datasets: [
      {
        label: "Tank1",
        backgroundColor: "orange",
        borderColor: "red",
        borderWidth: 1,
        data: tank1Data,
      },
      {
        label: "Tank2",
        data: [7, 8, 9, 10, 11, 12],
        backgroundColor: "red",
        borderColor: "orange",
        borderWidth: 1,
      },
      {
        label: "Tank3",
        data: [13, 14, 15, 16, 17, 18],
        backgroundColor: "green",
      },
      {
        label: "Tank4",
        data: [19, 20, 21, 22, 23, 24],
        backgroundColor: "blue",
      },
      {
        label: "Tank5",
        data: [25, 26, 27, 28, 29, 30],
        backgroundColor: "yellow",
      },
      {
        label: "Tank6",
        data: [0, 0, 26, 0, 0, 0],
        backgroundColor: "brown",
      },
    ],
  });
  const [dpData, setdpData] = useState({
    labels: ["CSE", "IT", "ECE", "EE", "ICE", "IPE"],
    datasets: [
      {
        label: "Tank1",
        backgroundColor: "orange",
        borderColor: "red",
        borderWidth: 1,
        data: tank1Data,
      },
      {
        label: "Tank2",
        data: [7, 8, 9, 10, 11, 12],
        backgroundColor: "red",
        borderColor: "orange",
        borderWidth: 1,
      },
      {
        label: "Tank3",
        data: [13, 14, 15, 16, 17, 18],
        backgroundColor: "green",
      },
      {
        label: "Tank4",
        data: [19, 20, 21, 22, 23, 24],
        backgroundColor: "blue",
      },
      {
        label: "Tank5",
        data: [25, 26, 27, 28, 29, 30],
        backgroundColor: "yellow",
      },
      {
        label: "Tank6",
        data: [0, 0, 26, 0, 0, 0],
        backgroundColor: "brown",
      },
    ],
  });

  const [resData, setresData] = useState({
    labels: [
      "Residence-1",
      "Residence-2",
      "Residence-3",
      "Residence-4",
      "Residence-5",
      "Residence-6",
    ],
    datasets: [
      {
        label: "Tank1",
        backgroundColor: "orange",
        borderColor: "red",
        borderWidth: 1,
        data: tank1Data,
      },
      {
        label: "Tank2",
        data: [7, 8, 9, 10, 11, 12],
        backgroundColor: "red",
        borderColor: "orange",
        borderWidth: 1,
      },
      {
        label: "Tank3",
        data: [13, 14, 15, 16, 17, 18],
        backgroundColor: "green",
      },
      {
        label: "Tank4",
        data: [19, 20, 21, 22, 23, 24],
        backgroundColor: "blue",
      },
      {
        label: "Tank5",
        data: [25, 26, 27, 28, 29, 30],
        backgroundColor: "yellow",
      },
      {
        label: "Tank6",
        data: [0, 0, 26, 0, 0, 0],
        backgroundColor: "brown",
      },
    ],
  });
  const [adData, setadData] = useState({
    labels: [
      "Admin Building-1",
      "Admin Building-2",
      "Admin Building-3",
      "Admin Building-4",
      "Admin Building-5",
      "Admin Building-6",
    ],
    datasets: [
      {
        label: "Tank1",
        backgroundColor: "orange",
        borderColor: "red",
        borderWidth: 1,
        data: tank1Data,
      },
      {
        label: "Tank2",
        data: [7, 8, 9, 10, 11, 12],
        backgroundColor: "red",
        borderColor: "orange",
        borderWidth: 1,
      },
      {
        label: "Tank3",
        data: [13, 14, 15, 16, 17, 18],
        backgroundColor: "green",
      },
      {
        label: "Tank4",
        data: [19, 20, 21, 22, 23, 24],
        backgroundColor: "blue",
      },
      {
        label: "Tank5",
        data: [25, 26, 27, 28, 29, 30],
        backgroundColor: "yellow",
      },
      {
        label: "Tank6",
        data: [0, 0, 26, 0, 0, 0],
        backgroundColor: "brown",
      },
    ],
  });
  const [ghData, setghData] = useState({
    labels: ["GH-1", "GH-2", "MGH"],
    datasets: [
      {
        label: "Tank1",
        data: [11, 21, 31],
        backgroundColor: "orange",
      },
      {
        label: "Tank2",
        data: [71, 81, 91],
        backgroundColor: "red",
      },
      {
        label: "Tank3",
        data: [131, 141, 151],
        backgroundColor: "green",
      },
      {
        label: "Tank3",
        data: [161, 171, 181],
        backgroundColor: "blue",
      },
      {
        label: "Tank4",
        data: [191, 201, 211],
        backgroundColor: "yellow",
      },
      {
        label: "Tank5",
        data: [221, 231, 241],
        backgroundColor: "brown",
      },
    ],
  });

  // const data = axios.get('https://iotwaterlevel.onrender.com/tank');
  

  return (
    <>
      {/* <h4 className="flex justify-center text-3xl font-bold p-10" >Hostels</h4> */}
      <div className="md:grid md:grid-cols-2 mx-28 my-12 ">
        <div className="md:p-10 p-2">
          <h4>Boys Hostel</h4>
          <Bar
            data={bhData}
            options={{
              title: {
                display: true,
                text: "",
                fontSize: 25,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="md:p-10 p-2">
          <h4>Girls Hostel</h4>
          <Bar
            data={ghData}
            options={{
              title: {
                display: true,
                text: "",
                fontSize: 25,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="md:p-10 p-2">
          <h4>Departments</h4>
          <Bar
            data={dpData}
            options={{
              title: {
                display: true,
                text: "",
                fontSize: 25,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="md:p-10 p-2">
          <h4>Residences</h4>
          <Bar
            data={resData}
            options={{
              title: {
                display: true,
                text: "",
                fontSize: 25,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="md:p-10 p-2">
          <h4>Admin Building</h4>
          <Bar
            data={adData}
            options={{
              title: {
                display: true,
                text: "",
                fontSize: 25,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
