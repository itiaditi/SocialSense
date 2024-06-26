/** @format */
"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 500) + 100
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 500) + 100
  }
];

const chartData = {
  labels: data.map(item => item.name),
  datasets: [
    {
      label: "Total",
      data: data.map(item => item.total),
      backgroundColor: "orange",
      borderRadius: 4
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context:any) {
          return `$${context.raw}`;
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: "#888888",
        font: {
          size: 12
        }
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        color: "#888888",
        font: {
          size: 12
        },
        callback: function (value:any) {
          return `$${value}`;
        }
      },
      grid: {
        display: false
      }
    }
  }
};

export default function BarChart({}: Props) {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <Bar data={chartData} options={options} color="yellow" />
    </div>
  );
}
