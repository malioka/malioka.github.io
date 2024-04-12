var data = {
  labels: ['Русский', 'Украинский', 'Белорусский', 'Польский', 'Немецкий'],
  datasets: [{
    label: 'Процент знания языка',
    data: [25.1, 23.7, 22.8, 22.1, 25.2],
    backgroundColor: [
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    animation: {
      animateScale: true,
      animateRotate: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontSize: 14
      }
    }
  }
});
