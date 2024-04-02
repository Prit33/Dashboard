import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Current Year",
            backgroundColor: "#10b981",
            borderColor: "#10b981",
            data: [80, 220, 490, 420, 320, 200, 270, 500, 750, 940, 480, 890],
            fill: false,
          },
          {
            label: "Previous Year",
            fill: false,
            backgroundColor: "#047857",
            borderColor: "#047857",
            data: [750, 500, 450, 150, 100, 130, 500, 750, 900, 500, 400, 600],
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false,
          text: "Projects",
          fontColor: "white",
        },
        legend: {
          display: true,
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
          fullWidth: true,
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,0.9)",
                fontSize: 10, 
              },
              display: true,
              scaleLabel: {
                display: false, 
              },
              gridLines: {
                display: false,
                borderDash: [4],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
                fontSize: 10,
                min: 0,
                max: 1000,
                stepSize: 500,
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [0],
                borderDashOffset: [0],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.20)",
                zeroLineColor: "rgba(255, 255, 255, 0.20)",
                zeroLineBorderDash: [1],
                zeroLineBorderDashOffset: [1],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-10/12 h-auto mb-6 shadow-lg rounded-lg bg-slate-800 ">
        <div className="rounded-t h-12 px-4 py-2 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1 m-2 ">
              <h2 className="text-white text-xl font-semibold mb-0">
                Projects
              </h2>{" "}
              {/* Remove padding/margin from title */}
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto ">
          {/* Chart */}
          <div className="relative h-350-px p-2 -mt-4 -mb-6">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
