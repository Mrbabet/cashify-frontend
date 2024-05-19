import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  selectActiveCategory,
  selectPeriodData,
} from "../../redux/transactions/selectors";

const TransactionCharts = ({ type }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const chartValuesType = useSelector(selectPeriodData);
  const activeCategory = useSelector(selectActiveCategory);

  let chartData = null;

  let categoryData = null;

  if (type === "expenses") {
    categoryData =
      chartValuesType?.expenses.expensesData[activeCategory?.toLowerCase()];
  } else if (type === "income") {
    categoryData =
      chartValuesType?.incomes.incomesData[activeCategory?.toLowerCase()];
  }

  if (categoryData) {
    const keys = Object.keys(categoryData);
    const labels = [];
    const chartDataValues = [];

    keys.forEach((key) => {
      if (key !== "total") {
        labels.push(key);
        chartDataValues.push(categoryData[key]);
      }
    });

    chartData = {
      labels: labels,
      datasets: [
        {
          label: "Prices",
          data: chartDataValues,
          backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
          borderRadius: 10,
          barThickness: isMobile ? 15 : 30,
          barPercentage: isMobile ? 0.3 : 0.7,
          categoryPercentage: isMobile ? 0.4 : 0.8,
        },
      ],
    };
  }

  const options = {
    type: "bar",
    indexAxis: isMobile ? "y" : "x",
    layout: {
      padding: {
        left: isMobile ? 40 : 20,
        right: isMobile ? 100 : 20,
        top: isMobile ? 0 : 40,
        bottom: isMobile ? 0 : 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: !isMobile,
        },
      },
      y: {
        grid: {
          display: !isMobile,
        },
        ticks: {
          display: isMobile,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: isMobile ? "end" : "end",
        align: isMobile ? "end" : "end",
        formatter: (value) => {
          return ` ${value} EUR`;
        },
        color: "#52555F",
        font: {
          size: isMobile ? 10 : 12,
        },
      },
    },
  };

  return (
    <Box
      className="container mx-auto flex flex-col gap-4 justify-center items-center sm:mt-10 sm:py-14 p-2 md:p-8 lg:px-32 bg-white rounded-3xl shadow-none sm:shadow-form h-full"
      w="full"
    >
      {chartData && (
        <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
      )}
    </Box>
  );
};

export default TransactionCharts;
