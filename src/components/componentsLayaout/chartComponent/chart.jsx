import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './chart.css'; 

function Chart() {
  useEffect(() => {
    const visualizaciones = [35, 40, 45, 50, 55, 60, 65];
    const maxVisualizaciones = Math.max(...visualizaciones);

    const options = {
      chart: {
        type: 'bar',
        height: 'auto',
        background: 'transparent' 
      },
      series: [{
        name: 'visualizaciones',
        data: visualizaciones
      }],
      xaxis: {
        categories: ['1981', '1982', '1983', '1984', '1985', '1986', '1987'],
        labels: {
          style: {
            colors: '#FFFFFF', 
          }
        }
      },
      yaxis: {
        title: {
          text: 'Escuchas',
          style: {
            color: '#FFFFFF', 
          }
        },
        labels: {
          style: {
            colors: '#FFFFFF', 
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          colors: {
            ranges: [{
              from: maxVisualizaciones,
              to: maxVisualizaciones,
              color: '#ff4560' 
            }]
          }
        }
      },
      colors: visualizaciones.map(val => val === maxVisualizaciones ? '#abc4ff' : '#004dcf'), 
      legend: {
        show: false 
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }, []);

  return <div id="chart" style={{ 
    maxWidth: '650px', 
    margin: '35px auto'
    
  }}></div>;
}

export default Chart;
