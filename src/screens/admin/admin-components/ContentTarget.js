import React from "react";
import { Bar } from "react-chartjs-2";

const ContentTarget = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Contents",
        backgroundColor: "#916BBF",
        data: [3, 12, 7, 5, 15, 8],
      },
      {
        label: "Targets",
        backgroundColor: "#FF5733",
        data: [1, 8, 3, 2, 5, 5],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} height={'90'} />
    </div>
  );
};

export default ContentTarget;
