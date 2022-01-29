import { useQuery } from 'react-query';
import { fetchCryptoHistory } from '../api/requestApi';
import ApexChart from 'react-apexcharts';

interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export type ChartProps = {
  coinId: string;
};

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ['ohlvc', coinId],
    () => fetchCryptoHistory(coinId),
    { refetchInterval: 10000 },
  );

  const getChartGradient = () => {
    const closingPrices = data?.map((price) => price.close);
    if (closingPrices) {
      let start = 0;
      let last = closingPrices.length - 1;
      let currentColor;
      closingPrices[start] <= closingPrices[last]
        ? (currentColor = 'red')
        : (currentColor = 'pink');
      return currentColor;
    } else return '';
  };

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'price',
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 300,
              width: 500,
              background: 'transparent',
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: 'datetime',
              categories: data?.map((price) => price.time_close),
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: 'smooth',
              width: 4,
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['blue'], stops: [0, 80, 100] },
            },
            colors: [getChartGradient()],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
