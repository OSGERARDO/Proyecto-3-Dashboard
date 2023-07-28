
const ctx = document.getElementById('myChart');
let grafico;

export const crearGrafico = (fechas,temperaturas) => {

if (grafico) {
  grafico.destroy()
}

  grafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: fechas.splice(0,16),
      datasets: [{
        label: 'Tº Próximos 2 días',
        data: temperaturas.splice(0,16),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
