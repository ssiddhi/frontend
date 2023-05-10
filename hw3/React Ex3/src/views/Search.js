import { Doughnut } from "react-chartjs-2";
import { backgroundColors, borderColors } from "./../utils/chartColors";

function Charts(props) {
  const { title } = props;

  const bookNames = [
    "A Game of Thrones",
    "A Clash of Kings",
    "A Storm of Swords ",
    "A Feast for Crows",
    "A Dance with Dragons"
  ];
  const bookPages = [694, 768, 992, 784, 1040];

  const data = {
    labels: bookNames,
    datasets: [
      {
        label: bookNames,
        data: bookPages,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  return (
    <section className="container">
      <h1>{title}</h1>
      <div style={styles.chartContainer}>
        <Doughnut data={data} options={options} />
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

export default Charts;
