import React from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

function Bookchart({ books }) {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const data = {
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }]
  };
  books.map(book => {
    data.labels.push(book.volumeInfo.title);
    data.datasets[0].data.push(book.volumeInfo.pageCount);
    data.datasets[0].backgroundColor.push(
      "#" + (((1 << 24) * Math.random()) | 0).toString(16)
    );
  });
  return (
    <Pie
      // id="bookchart"
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true
      }}
      position="right"
      legend={{ position: "right", align: "start", display: "false" }}
      title={{ text: "Page count", display: "true" }}
      width="30"
      height="30"
    />
  );
}

export default Bookchart;
