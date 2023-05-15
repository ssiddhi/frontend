// import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { backgroundColors, borderColors } from "./../utils/chartColors";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

// function HouseCharts(props) {
// const { title } = props;
function HouseCharts() {
  const houseNames = [
    "House Targaryen",
    "House Tarly",
    "House Stark",
    "House Baratheon",
    "House Lannister",
    "House Greyjoy",
    "House Clegane",
    "House Baelish",
    "House Seaworth",
    "Unknown",
    "House Tyrell",
    "Free Folk",
    "Tarth",
    "Naathi",
    "Bolton",
    "Naharis",
    "Lorathi",
    "Mormont",
    "Sparrow",
    "Viper",
    "Sand",
    "Worm",
    "Qyburn",
    "Bronn"
  ];
  const noOfHouses = [
    3,
    1,
    10,
    5,
    4,
    3,
    1,
    1,
    1,
    4,
    2,
    2,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1
  ];

  const data = {
    labels: houseNames,
    datasets: [
      {
        label: houseNames,
        data: noOfHouses,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  // const options = {
  //   scales: {
  //     x: {
  //       beginAtZero: true
  //     }
  //   }
  // };

  return (
    <section className="container">
      {/* <h1>{title}</h1> */}
      <div style={styles.chartContainer}>
        <Doughnut
          data={data}
          //  options={options}
        />
      </div>
    </section>
  );
}

const styles = {
  chartContainer: {
    maxWidth: "500px",
    width: "60%",
    height: "60%",
    margin: "20px auto"
  }
};

export default HouseCharts;
