import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChart({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-container">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width={165}
        height={295}
        series={series}
      />
    </div>
  );
}

export default PieChart;
