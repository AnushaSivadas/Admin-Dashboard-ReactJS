export const BarData = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],       
      datasets: [{
        data: [50, 30, 70, 55, 60, 20, 65, 75, 70, 62, 57, 64],
        backgroundColor: ['rgba(118, 0, 128, 0.2)', 'rgba(118, 0, 128, 0.2)', 'rgba(118, 0, 128, 0.2)',
                          'rgba(118, 0, 128, 0.2)', 'rgba(118, 0, 128, 0.2)', 'rgba(118, 0, 128, 0.2)',
                          'rgba(118, 0, 128, 0.2)', 'purple', 'rgba(118, 0, 128, 0.2)',
                          'rgba(118, 0, 128, 0.2)', 'rgba(118, 0, 128, 0.2)', 'rgba(118, 0, 128, 0.2)'],
        borderColor: 'rgba(75, 192, 192, 0)',
        borderRadius: 5,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          display:false
        }
      },
      plugins: {
        legend: {
          display: false 
        }
      },
      bar: {
        borderWidth: 0,
      }
    }
  }