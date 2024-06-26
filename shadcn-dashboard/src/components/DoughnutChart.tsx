// components/DoughnutChart.tsx
"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  colors: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels, colors }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  const options:any = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const total = tooltipItem.dataset.data.reduce((acc: number, val: number) => acc + val, 0);
            const currentValue = tooltipItem.raw;
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;