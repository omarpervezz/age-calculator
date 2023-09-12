const ctx = document.getElementById('myChart');
let myChart; // Declare a variable to store the chart object
function ageChart(year, months, weeks, days, hours) {
  const data = {
    labels: ['Age', 'Months', 'Weeks', 'Days', 'Hours'],
    datasets: [
      {
        label: 'Age Chart',
        data: [year, months, weeks, days, hours],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(6, 87, 102)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  };

  // Create the chart and store the reference
  myChart = new Chart(ctx, {
    type: 'polarArea',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Function to destroy the chart
function destroyChart() {
    if (myChart) {
      myChart.destroy();
      myChart = null; // Reset the chart reference
    }
  }
export { ageChart, destroyChart };

