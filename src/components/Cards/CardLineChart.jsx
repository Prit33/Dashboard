import { useEffect } from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  useEffect(() => {
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
            backgroundColor: "#1e6752",
            borderColor: "#1e6752",
            borderWidth: 2,
            data: [80, 220, 490, 420, 320, 200, 270, 500, 750, 940, 480, 890],
            fill: false,
          },
          {
            label: "Previous Year",
            fill: false,
            backgroundColor: "#518f7e",
            borderColor: "#518f7e",
            borderWidth: 2,
            data: [750, 500, 450, 150, 100, 130, 500, 750, 900, 500, 400, 600],
            borderDash: [8, 8],
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
            fontColor: "gray",
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
                fontColor: "gray",
                fontSize: 12,
              },
              display: true,
              scaleLabel: {
                display: false,
              },
              gridLines: {
                display: true,
                borderDash: [4],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.1)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "gray",
                fontSize: 10,
                min: 0,
                max: 1000,
                stepSize: 200,
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [0],
                drawBorder: false,
                color: "#ced1d7",
                zeroLineColor: "rgba(255, 255, 255, 0.10)",
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
      <div className="relative flex flex-col min-w-0 break-words h-auto mb-6 shadow-lg rounded-lg bg-white ">
        {/* Chart title */}
        <div className="h-12 px-4 py-2 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1 m-2 ">
              <h2 className="text-slate-800 text-xl font-semibold ">
                Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto bg-[#EEEE] m-2 rounded-lg">
          {/* Chart canvas*/}
          <div className="relative h-350-px p-2 -mt-4 -mb-6 ">
            <canvas id="line-chart" width={98} height={47}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
