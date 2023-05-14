const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  //added more background colors
  "rgba(221, 148, 192, 0.8)",
  "rgba(51, 196, 162, 0.8)",
  "rgba(177, 196, 51, 0.8)",
  "rgba(218, 123, 32, 0.8)",
  "rgba(218, 208, 32, 0.8)",
  "rgba(80, 218, 32, 0.8)",
  "rgba(32, 218, 208, 0.8)",
  "rgba(218, 32, 165, 0.8)",
  "rgba(218, 32, 88, 0.37)",
  "rgba(192, 218, 32, 0.37)",
  "rgba(32, 218, 65, 0.37)",
  "rgba(189, 32, 218, 0.37)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
  "rgba(78, 52, 199, 1)",
  //added more border colors
  "rgba(221, 148, 192, 0.8)",
  "rgba(51, 196, 162, 0.8)",
  "rgba(177, 196, 51, 0.8)",
  "rgba(218, 123, 32, 0.8)",
  "rgba(218, 208, 32, 0.8)",
  "rgba(80, 218, 32, 0.8)",
  "rgba(32, 218, 208, 0.8)",
  "rgba(218, 32, 165, 0.8)",
  "rgba(218, 32, 88, 0.37)",
  "rgba(192, 218, 32, 0.37)",
  "rgba(32, 218, 65, 0.37)",
  "rgba(189, 32, 218, 0.37)",
];

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

//reference --https://www.geeksforgeeks.org/create-a-chart-from-json-data-using-fetch-get-request-fetch-api-in-javascript/
//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

const getData = async (url) => {
  const response = await fetch(url);
  const datapoints = await response.json();
  console.log(datapoints);

  const index = {};

  datapoints.map((item) => {
    if (
      item.family === "" ||
      item.family === "Unkown" ||
      item.family === "None"
    ) {
      item.family = "Unknown";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (
      item.family === "House Targaryen" ||
      item.family === "Targaryan"
    ) {
      item.family = "House Targaryen";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (item.family === "Lorath" || item.family === "Lorathi") {
      item.family = "Lorathi";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (
      item.family === "House Baratheon" ||
      item.family === "Baratheon"
    ) {
      item.family = "House Baratheon";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (
      item.family === "House Lanister" ||
      item.family === "House Lannister" ||
      item.family === "Lannister"
    ) {
      item.family = "House Lannister";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (item.family === "House Stark" || item.family === "Stark") {
      item.family = "House Stark";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (item.family === "House Tyrell" || item.family === "Tyrell") {
      item.family = "House Tyrell";
      index[item.family] = (index[item.family] || 0) + 1;
    } else if (item.family === "House Greyjoy" || item.family === "Greyjoy") {
      item.family = "House Greyjoy";
      index[item.family] = (index[item.family] || 0) + 1;
    }

    renderChart(item.family, backgroundColors, borderColors);
  });
};

getData(url);

const renderChart = (houses, backgroundColors, borderColors) => {
  const donutChart = document.querySelector(".donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: [
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
        "Bronn",
      ],
      datasets: [
        {
          label: "Thrones API house",

          data: [
            3, 1, 10, 2, 5, 3, 1, 1, 1, 3, 1, 2, 1, 1, 1, 2, 1, 2, 3, 2, 1, 1,
            1, 1,
          ],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

// renderChart();
