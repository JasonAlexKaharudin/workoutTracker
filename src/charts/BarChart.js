import React from 'react'
import { Chart } from 'chart.js'

const data = {
    label: ['red', 'blue', 'green'],
    datasets: [{
        data: [12, 5, 10]
    }]
};

const BarChart = () => {
  return (
    <div>
        <Chart type='line' data={data} />
    </div>
  )
}

export default BarChart