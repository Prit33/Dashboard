import { useEffect } from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
          {
            backgroundColor: "#05563f",
            // borderColor: "#047857",
            data: [80, 95, 74, 82],
            fill: false,
            barThickness: 32,
            // borderWidth: 2,
            borderSkipped: "bottom",
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
              ticks: {
                fontColor: "gray",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Year",
                fontColor: "gray",
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "gray",
                min: 1,
                max: 100,
                stepSize: 49,
                callback: function (value, index, values) {
                  return value + "M";
                },
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                color: "#ced1d7", // grid lines, currently set to Gray
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
      <div className="relative flex flex-col min-w-0 break-words bg-white  mb-4 shadow-lg rounded-md">
        {/* Chart Title */}
        <div className="rounded-t mb-0 px-4 py-3 h-10 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1 ml-2">
              <h2 className="text-slate-700 text-xl font-semibold">Revenue</h2>
            </div>
          </div>
        </div>
        <div className="m-2 p-2 rounded-md flex-auto bg-[#EEEE]">
          {/* Chart Canvas */}
          <div className="relative h-350-px p-2 ">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
