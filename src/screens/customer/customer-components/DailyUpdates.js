
import React from "react";
import {Chart} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const DailyUpdates = () => {
  const labels = ["12/3", "13/3", "14/3", "15/3", "16/3", "17/3", "18/3"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Updates of March 2024",
        backgroundColor: "#916BBF",
        borderColor: "rgb(255, 99, 132)",
        data: [1, 10, 5, 2, 20, 10, 5],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} height={'110'}/>
    </div>
  );
};

export default DailyUpdates;
