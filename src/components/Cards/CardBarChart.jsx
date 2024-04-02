import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
          {
            backgroundColor: "#059669",
            //#047857
            borderColor: "#6ee7b7",
            data: [80, 95, 74, 82],
            fill: false,
            barThickness: 32,
            borderWidth: 2,
            borderSkipped: 'bottom'
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks:{
                fontColor: "white",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Year",
                fontColor: "white",
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "white", // Change y-axis scale label color to white
                min: 1,
                max: 100,
                stepSize: 49,
                callback: function (value, index, values) {
                  return value + "M"; // Add "M" suffix to indicate millions
                },
                // borderRadius: "84px"
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                color: "#334155", // Change grid color to white
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-slate-800 w-10/12 mb-4 shadow-lg rounded-md">
        <div className="rounded-t mb-0 px-4 py-3 h-10 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1 ">
              <h2 className="text-white text-xl font-semibold">Revenue</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto bg-slate-800 rounded-md">
          {/* Chart */}
          <div className="relative h-350-px ">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
