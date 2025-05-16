"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ResultsHighlightsProps {
  project: Project;
}

export default function ResultsHighlights({ project }: ResultsHighlightsProps) {
  const chartData = {
    labels: project.results.visualizationData.labels,
    datasets: [
      {
        label: project.results.visualizationData.datasets[0].label,
        data: project.results.visualizationData.datasets[0].data,
        borderColor: "#15B8A1",
        backgroundColor: "rgba(21, 184, 161, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key metrics and outcomes that demonstrate the project's success
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {project.results.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="text-4xl font-bold text-teal-600 mb-2">
                {metric.value}
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-2">
                {metric.label}
              </p>
              <p className="text-sm text-gray-500">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
            Growth Trajectory
          </h3>
          <div className="h-[300px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 