import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import { ILineChartProps } from '../../../common/types/assets';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = (props: ILineChartProps) => {
  const { data } = props;

  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const values = {
    labels: data[0].data.map((item: any) => moment(item[0]).format('DD.MM.YY')),
    datasets: [
      {
        label: 'Price',
        data: data[0].data.map((item: any) => item[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={values} width='100%' height='20%' />;
};
