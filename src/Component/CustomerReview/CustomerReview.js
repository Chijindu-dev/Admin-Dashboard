import React from "react";
import "./CustomerReview.css";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 20, 30, 40, 50, 120, 140],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/mm/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z", // Example date string
          "2019-12-25T12:00:00.000Z", // Another example date string
          "2020-06-10T08:30:00.000Z", // Yet another example date string
          "2021-03-15T18:45:00.000Z", // And one more example date string
          "2022-08-07T15:20:00.000Z", // Fifth example date string
          "2022-08-07T15:20:00.000Z", // Fifth example date string
          
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart series={data.series} options={data.options} type="area"/>
    </div>
  );
};

export default CustomerReview;
